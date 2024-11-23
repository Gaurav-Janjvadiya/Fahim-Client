import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import gif from "../../assets/gifs/login.gif";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    axios
      .post(import.meta.env.VITE_SERVER_URL + "/api/users/signin", data)
      .then((res) => {
        const { token } = res.data;
        // Handle the success response, e.g., redirect or store token
        if (token) {
          Cookies.set("jwt", token);
          dispatch(login());
          navigate("/home");
        } else {
          navigate("/signup");
        }
      })
      .catch((e) => {
        // You can add more error handling here if you get an error from the server
        console.log(e.response?.data || e.message);
      });
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <div className="relative w-full max-w-md">
        <div className="min-h-screen flex items-center justify-center">
          <img
            className="relative w-full max-w-md h-full"
            src={gif}
            alt="gif"
          />
          <div className="backdrop-blur absolute w-full max-w-md p-6 border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full p-2 border bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Button type="submit">Login</Button>
              </div>
            </form>

            <p className="text-center text-sm mt-4">
              Don't have an account?
              <Link
                className="text-blue-400 hover:text-blue-300 underline"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
