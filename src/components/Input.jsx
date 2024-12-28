import { TextField } from '@mui/material';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(
  ({ label, type = 'text', name, value, onChange, ...props }, ref) => {
    return (
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        variant='outlined'
        fullWidth
        {...props}
        sx={{
          input: {
            color: '#F1F1F1',
          },
          label: {
            color: '#F1F1F1',
          },
          fieldset: {
            borderColor: '#F1F1F1',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#39FF14',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: '#39FF14',
            },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#39FF14',
          },
        }}
      />
    );
  },
);

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
