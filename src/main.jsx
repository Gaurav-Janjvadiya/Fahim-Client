import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const JoinUs = lazy(() => import('./pages/JoinUs.jsx'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'));
const Professor = lazy(() => import('./pages/Professor.jsx'));
const Course = lazy(() => import('./pages/Course.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));
const ManageCourses = lazy(() => import('./pages/ManageCourses.jsx'));
const MoreCourses = lazy(() => import('./pages/MoreCourses.jsx'));
const Professors = lazy(() => import('./pages/Professors.jsx'));
const Courses = lazy(() => import('./pages/Courses.jsx'));

// Router setup with lazy-loaded pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: '/signup',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/terms',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <TermsAndConditions />
          </Suspense>
        ),
      },

      // Protecting all routes
      {
        path: '/home',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/home/edit',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <ManageCourses />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/home/moreCourses',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <MoreCourses />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/courses/:courseReviewId',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/join-us',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <JoinUs />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/professors',
        element: (
          <Suspense fallback={<CircularProgress size='8rem' />}>
            <ProtectedRoute>
              <Professors />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/professors/:professorId',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <Professor />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/settings',
        element: (
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <h1 className='text-4xl flex justify-center items-center font-bold text-center text-red-600'>
        404 Not Found
      </h1>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
