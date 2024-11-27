import instance from "./";
import { login as userLogin } from "../redux/store";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const signUp = async (userData, navigate, dispatch, setServerError) => {
  try {
    const response = await instance.post("/api/users/signup", userData); // Await API response
    const { token } = response.data;

    if (token) {
      dispatch(userLogin()); // Dispatch Redux action
      Cookies.set("jwt", token, { secure: true }); // Store JWT securely
      navigate("/home"); // Navigate to the home page
    }
  } catch (e) {
    setServerError(
      e.response?.data?.message || e.message || "An error occurred"
    );
  }
};

export const login = async (userData, navigate, dispatch, setServerError) => {
  try {
    const { data } = await instance.post("/api/users/signin", userData);
    // Handle the success response, e.g., redirect or store token
    if (data.token) {
      Cookies.set("jwt", data.token, { secure: true });
      dispatch(userLogin());
      navigate("/home");
    } else {
      navigate("/signup");
    }
  } catch (e) {
    // Update serverError state with the error message
    console.log(e);
    setServerError(
      e.response?.data?.message || e.message || "An unknown error occurred"
    );
  }
};

export const getAllUsers = async () => {
  const token = Cookies.get("jwt");
  if (!token) {
    return;
  }
  try {
    const { data } = await instance.get("/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const users = data.users;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = async (setUserData, setError) => {
  const token = Cookies.get("jwt");
  if (!token) {
    setError("No authentication token found.");
    return;
  }
  try {
    const { data } = await instance.get("/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserData({
      username: data.username,
      email: data.email,
      major: data.major,
    });
  } catch (e) {
    // Check if the error has a response (server responded with an error)
    if (e.response) {
      setError(`Error: ${e.response.data.message || e.response.statusText}`);
    } else if (e.request) {
      setError("Network error. Please try again later.");
    } else {
      setError("An unexpected error occurred.");
    }
    console.log(e); // For debugging purposes
  }
};

export const getUserById = async () => {
  const token = Cookies.get("jwt");
  if (!token) {
    return;
  }
  const decoded = jwtDecode(token);
  const userId = decoded.id; // Extract user id from the token
  try {
    const { data } = await instance.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { user } = data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async ({
  username,
  email,
  password,
  major,
  file,
  courseNumbers,
}) => {
  const token = Cookies.get("jwt");
  if (!token) {
    console.log("No token found");
    return;
  }

  const decoded = jwtDecode(token);
  const userId = decoded.id; // Extract user id from the token

  try {
    const { data } = await instance.put(
      `/api/users/${userId}`,
      {
        username,
        email,
        password,
        major,
        profileImage: file,
        courseNumbers, // Assuming `courseNumbers` is an array of strings
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { updatedUser: user } = data;
    console.log("User updated:", updatedUser);
  } catch (e) {
    console.log("Error updating user:", e);
  }
};
