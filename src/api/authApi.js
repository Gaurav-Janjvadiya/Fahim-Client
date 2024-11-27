    import instance from "./";
    import { login as userLogin } from "../redux/store";
    import Cookies from "js-cookie";

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

    export const logout = () => {};
