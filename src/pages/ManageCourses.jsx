import { CourseFlow, Button } from '../components';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  addCourses,
  removeCourses,
  recommendTopCombinations,
} from '../api/authApi';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ManageCourses = () => {
  const { courses } = useSelector((state) => state.courses);
  const addMutation = useMutation({
    mutationFn: addCourses,
    onSuccess: () => {
      console.log('done');
    },
    onError: () => {
      console.log('error');
    },
  });
  const removeMutation = useMutation({
    mutationFn: removeCourses,
    onSuccess: () => {
      console.log('done');
    },
    onError: () => {
      console.log('error');
    },
  });
  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => recommendTopCombinations(12),
    onSuccess: () => {
      console.log('done');
    },
    onError: () => {
      console.log('error');
    },
  });

  return (
    <>
      <div className='sm:p-6 p-3 min-h-screen w-full'>
        <div className='flex items-start justify-center h-full w-full p-4 sm:flex-row flex-col sm:space-y-0 space-y-4 sm:space-x-4 space-x-0 rounded-xl border border-[#444]'>
          <div className='relative border border-[#444] w-full sm:w-4/5 rounded-lg p-4 shadow-lg h-screen'>
            <CourseFlow />
          </div>
          <div className='flex items-center justify-center flex-col rounded-xl border border-[#444] h-fit w-full sm:w-[20vw] space-y-4 p-4'>
            {addMutation.isLoading && removeMutation.isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <Button
                  onClick={() => {
                    addMutation.mutate(courses);
                  }}
                  style={'px-8 w-full'}
                >
                  Add
                </Button>
                <Button
                  onClick={() => {
                    removeMutation.mutate(courses);
                  }}
                  style={'px-8 w-full'}
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='h-full sm:p-6 p-3 space-y-6 w-full'>
        <div className='flex w-full flex-col sm:flex-row justify-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-2 items-start sm:justify-between px-4 py-2'>
          <h1 className='break-all font-bold text-[#39FF14] text-2xl sm:text-4xl mb-2 sm:mb-0'>
            Course Recommendation
          </h1>
          <Button className='mt-2 sm:mt-0'>
            <Link to={'/home/moreCourses'}>More </Link>
          </Button>
        </div>

        <div className='grid h-full w-full gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {data?.map((arrays, outerIndex) => (
                <Card
                  raised={true}
                  key={outerIndex}
                  sx={{
                    border: '1px solid #444',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: '#39FF14' },
                    borderRadius: 2,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#121212',
                  }}
                >
                  <CardContent className='space-y-2'>
                    {arrays.map((array, innerIndex) => (
                      <Typography
                        variant='body2'
                        key={innerIndex}
                        sx={{
                          display: 'grid',
                          color: '#F1F1F1',
                          fontSize: '1.2rem',
                        }}
                      >
                        {array}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageCourses;
