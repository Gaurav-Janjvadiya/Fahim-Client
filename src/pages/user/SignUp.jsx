import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import gif from "../../assets/gifs/signup.gif";
import { signUp as userSignUp } from "../../api/authApi";
import { getAllMajors } from "../../api/majorApi"; // Import the query function
import { Select, MenuItem, CircularProgress } from "@mui/material";
import { Input } from "../../components"; // Import the custom Input component

function SignUp() {
  const [serverError, setServerError] = useState(null);
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    data: majors = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["majors"],
    queryFn: getAllMajors,
    onError: (err) => {
      console.error("Error fetching majors:", err);
    },
    onSuccess: (data) => {
      console.log("Majors fetched successfully:", data);
    },
  });

  const onSubmit = (data) => {
    setIsSignUpLoading(true);
    userSignUp(data, navigate, dispatch, setServerError, setIsSignUpLoading);
  };

  if (error) {
    return <div>Error fetching majors. Please try again later.</div>; // Show error message if fetching fails
  }

  return (
    <div className="bg-black py-3 min-h-screen flex items-center justify-center text-[#F1F1F1]">
      <div className="relative w-full max-w-md">
        <div className="min-h-screen flex items-center justify-center">
          <img
            className="relative w-full max-w-md h-full"
            src={gif}
            alt="gif"
          />
          <div className="backdrop-blur-sm absolute sm:w-full p-6 border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  id="username"
                  label="Username"
                  name="username"
                  value={watch("password")}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  id="email"
                  label="Email"
                  name="email"
                  value={watch("email")}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Major</label>
                <select
                  {...register("major", { required: "Please select a major" })}
                  className="w-full p-2 border bg-transparent text-[#F1F1F1] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option className="bg-[#1a1a1a] text-[#F1F1F1]" value="">
                    Select your major
                  </option>
                  {isLoading ? (
                    <div>
                      <CircularProgress />
                    </div>
                  ) : (
                    majors.map((major) => (
                      <option
                        className="bg-[#1A1A1A] text-[#F1F1F1]"
                        key={major.id}
                        value={major.name}
                      >
                        {major.name}
                      </option>
                    ))
                  )}
                </select>
                {errors.major && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.major.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  value={watch("password")}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={watch("confirmPassword")}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords don't match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p className="text-red-500 text-sm mt-4 text-center">
                  {serverError}
                </p>
              )}

              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must accept the terms and conditions",
                    })}
                    className="w-4 h-4 border bg-red bg-transparent rounded focus:outline-none focus:ring-none"
                  />
                  <span className="ml-2 text-sm">
                    I agree to the
                    <Link
                      className="text-blue-400 hover:text-blue-300 underline"
                      to="/terms"
                    >
                      Terms and Conditions
                    </Link>
                  </span>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <div>
                <Button type="submit" style={"w-full"}>
                  {isSignUpLoading ? (
                    <CircularProgress sx={{ color: "#E8F5E9" }} size={18} />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
            <p className="text-center mt-2 text-sm">
              Already have an account?
              <Link
                className="text-blue-400 hover:text-blue-300 ml-2 underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
