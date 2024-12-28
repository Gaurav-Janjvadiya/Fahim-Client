import { getCurrentUser, updateUser } from '../api/authApi';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../components';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button as MUIButton,
  Box,
  DialogContentText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Input } from '../components';

function Settings() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const [user, setUser] = useState({
    username: '',
    email: '',
  });

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: getCurrentUser,
  });

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (userData) {
      setUser({
        username: userData.username,
        email: userData.email,
      });
    }
  }, [userData]);

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries('userData');
      handleClose();
    },
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(user);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const isFormChanged =
    user.username !== userData?.username || user.email !== userData?.email;

  return (
    <div className='text-[#F1F1F1] p-6 sm:p-4 flex items-center justify-start flex-col w-full min-h-screen'>
      <div className='flex bg-[#1A1A1A] rounded-lg w-full max-w-[400px] space-y-4 flex-col justify-center items-start p-6 sm:p-4'>
        <div className='rounded-lg space-y-2 w-full'>
          <div className='font-medium'>
            <p className='text-2xl sm:text-xl'>{userData?.username}</p>
          </div>
          <p className='grid bg-[#2A2A2A] space-y-1 rounded text-wrap py-2 px-3'>
            <span className='text-gray-400 text-sm'>Email</span>
            <span className='text-gray-300 break-all'>{userData?.email}</span>
          </p>
        </div>
        <Button style='rounded-lg w-full' onClick={handleOpen}>
          Edit
        </Button>
      </div>

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx: {
            backgroundColor: '#1A1A1A',
            color: '#F1F1F1',
            padding: '20px',
          },
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Edit Profile</DialogTitle>

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <DialogContentText sx={{ color: '#F1F1F1', marginBottom: 1 }}>
            Update your profile information below.
          </DialogContentText>

          <Box>
            <Input
              id='outlined-username'
              label='Username'
              name='username'
              value={user?.username}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <Input
              id='outlined-email'
              label='Email'
              name='email'
              value={user?.email}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <MUIButton
            onClick={handleClose}
            sx={{ border: '1px solid', color: '#F1F1F1' }}
          >
            Cancel
          </MUIButton>
          <MUIButton
            type='submit'
            disabled={!isFormChanged}
            sx={{
              backgroundColor: '#39FF14',
              color: 'black',
              textShadow: '2px 2px 5px gray',
              '&.Mui-disabled': {
                backgroundColor: '#9E9E9E',
                color: '#1A1A1A',
              },
            }}
          >
            Save
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Settings;
