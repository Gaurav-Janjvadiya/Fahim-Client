import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import gif from "../../assets/gifs/login.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login as userLogin } from "../../api/authApi";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(""); // State to store server error message

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
    userLogin(data, navigate, dispatch, setServerError);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-[#F2F2F2]">
      <div className="relative w-full max-w-md">
        <div className="min-h-screen flex items-center justify-center">
          <img
            className="relative w-full max-w-md h-full"
            src={gif}
            alt="gif"
          />
          <div className="backdrop-blur bg-[#1010108d] absolute sm:w-full max-w-md sm:p-10 p-5 border rounded-lg shadow-lg">
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
                  className="w-full p-2 border bg-transparent text-[#F2F2F2] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-2 border bg-transparent text-[#F2F2F2] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Button type="submit" style={"w-full"}>
                  Login
                </Button>
              </div>
            </form>

            {serverError && (
              <p className="text-red-500 text-sm text-center mt-4">
                {serverError}
              </p>
            )}

            <p className="text-center text-sm mt-4">
              Don't have an account?
              <Link
                className="text-blue-400 hover:text-blue-300 ml-2 underline"
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
