import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import gif from '../assets/gifs/login.gif';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { login as userLogin } from '../api/authApi';
import { Input } from '../components';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    userLogin(data, navigate, dispatch, setServerError, setIsLoading);
  };

  const handleAddCredential = () => {
    setValue("email", "TEST@gmail.com");
    setValue("password", "password123");
  };

  return (
    <div className='bg-black min-h-screen flex items-center justify-center text-[#F1F1F1]'>
      <div className='relative w-full max-w-md'>
        <div className='min-h-screen flex items-center justify-center'>
          <img
            className='relative w-full max-w-md h-full'
            src={gif}
            alt='gif'
          />
          <div className='backdrop-blur bg-[#1010108d] absolute sm:w-full max-w-md sm:p-10 p-5 border rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <Input
                  label='Email'
                  autoFocus
                  name='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  value={watch('email')}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  id='password'
                  label='Password'
                  name='password'
                  type='password'
                  value={watch('password')}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Button type='submit' style={'w-full'}>
                  {isLoading ? (
                    <CircularProgress className='text-white' size={16} />
                  ) : (
                    'Login'
                  )}
                </Button>
              </div>
            </form>
            <div>
              <Button onClick={handleAddCredential} style={'w-full bg-orange-500 mt-2 hover:bg-orange-600'}>
                Add Credentials
              </Button>
            </div>

            {serverError && (
              <p className='text-red-500 text-sm text-center mt-4'>
                {serverError}
              </p>
            )}

            <p className='text-center text-sm mt-4'>
              Don&rsquo;t have an account?
              <Link
                className='text-blue-400 hover:text-blue-300 ml-2 underline'
                to='/signup'
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
