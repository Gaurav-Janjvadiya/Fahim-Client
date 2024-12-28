import instance from './';
import Cookies from 'js-cookie';

export const createMajor = async (majorData) => {
  const token = Cookies.get('jwt');
  try {
    const { data } = await instance.post('/api/majors', majorData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllMajors = async () => {
  try {
    const { data } = await instance.get('/api/majors');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMajorById = async (majorId) => {
  try {
    const { data } = await instance.get(`/api/majors/${majorId}`);
return data;  } catch (e) {
    console.log(e);
  }
};

export const updateMajor = async (majorId, majorData) => {
  const token = Cookies.get('jwt');
  try {
    const { data } = await instance.put(`/api/majors/${majorId}`, majorData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteMajor = async (majorId) => {
  const token = Cookies.get('jwt');
  try {
    const { data } = await instance.delete(`/api/majors/${majorId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
