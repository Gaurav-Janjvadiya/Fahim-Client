import instance from './';
import { login as userLogin } from '../redux/store';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const signUp = async (
  userData,
  navigate,
  dispatch,
  setServerError,
  setIsSignUpLoading,
) => {
  try {
    const response = await instance.post('/api/users/signup', userData);
    const { token } = response.data;

    if (token) {
      dispatch(userLogin());
      Cookies.set('jwt', token, { secure: true, expires: 1 / 24 }); // Expires in 1 day
      navigate('/home');
    }
  } catch (e) {
    setIsSignUpLoading(false);
    setServerError(
      e.response?.data?.message || e.message || 'An error occurred',
    );
  }
};

export const login = async (
  userData,
  navigate,
  dispatch,
  setServerError,
  setIsLoading,
) => {
  try {
    const { data } = await instance.post('/api/users/signin', userData);
    if (data.token) {
      Cookies.set('jwt', data.token, { secure: true, expires: 1 / 24 }); // Expires in 1 day
      dispatch(userLogin());
      navigate('/home');
    } else {
      navigate('/signup');
    }
  } catch (e) {
    console.log(e);
    setIsLoading(false);
    setServerError(
      e.response?.data?.message || e.message || 'An unknown error occurred',
    );
  }
};

export const getAllUsers = async () => {
  const token = Cookies.get('jwt');
  if (!token) {
    return;
  }
  try {
    const { data } = await instance.get('/api/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = async () => {
  const token = Cookies.get('jwt');
  if (!token) {
    throw new Error('No authentication token found.');
  }
  try {
    const { data } = await instance.get('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    // Check if the error has a response (server responded with an error)
    if (e.response) {
      throw new Error(
        `Error: ${e.response.data.message || e.response.statusText}`,
      );
    } else if (e.request) {
      throw new Error('Network error. Please try again later.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};

export const getUserById = async () => {
  const token = Cookies.get('jwt');
  if (!token) {
    return;
  }
  const decoded = jwtDecode(token);
  const userId = decoded.id; // Extract user id from the token
  try {
    const { data } = await instance.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (userData) => {
  const token = Cookies.get('jwt');
  if (!token) {
    console.log('No token found');
    return;
  }

  const decoded = jwtDecode(token);
  const userId = decoded.id; // Extract user id from the token

  try {
    const { data } = await instance.put(`/api/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    console.log('Error updating user:', e);
  }
};

export const addCourses = async (courseIds) => {
  console.log(courseIds);
  const token = Cookies.get('jwt');
  if (!token) {
    throw new Error('No authentication token found.');
  }
  try {
    const { data } = await instance.post(
      '/api/users/addcourses',
      { courseIds },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return data;
  } catch (error) {
    console.error('Error adding courses: ', error?.message, error);
  }
};

export const removeCourses = async (courseIds) => {
  console.log(courseIds);
  const token = Cookies.get('jwt');
  if (!token) {
    throw new Error('No authentication token found.');
  }
  try {
    const { data } = await instance.post(
      '/api/users/removecourses',
      { courseIds },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return data;
  } catch (error) {
    console.error(
      'Error removing courses: ',
      error?.message || 'An error occurred',
    );
  }
};

export const getEligibleCourses = async () => {
  const token = Cookies.get('jwt');
  if (!token) {
    throw new Error('No authentication token found.');
  }
  try {
    const { data } = await instance.get('/api/users/eligible/courses', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error(
      'Error getting eligible courses: ',
      error?.message || 'An error occurred',
    );
  }
};

export const recommendTopCombinations = async (creditLimit) => {
  console.log('CreditLimit', creditLimit);
  const token = Cookies.get('jwt');
  if (!token) {
    throw new Error('No authentication token found.');
  }
  try {
    const { data } = await instance.get(
      `/api/users/recommendation/courses/${creditLimit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return data;
  } catch (error) {
    console.error('Error getting recommended courses: ', error?.response?.data);
  }
};
