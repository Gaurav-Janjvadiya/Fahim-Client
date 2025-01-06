import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { memo } from 'react';

const Sort = memo(({ setState, state, options }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant='outlined'
      sx={{
        width: 'full',
      }}
    >
      <InputLabel
        id='sort-by-label'
        sx={{
          color: '#F1F1F1',
          '&.Mui-focused': {
            color: '#39FF14',
          },
        }}
      >
        Sort By
      </InputLabel>
      <Select
        labelId='sort-by-label'
        id='sort-by-label'
        value={state}
        onChange={handleChange}
        label='Sort By'
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#1A1A1A',
              color: '#F1F1F1',
            },
          },
        }}
        sx={{
          color: '#F1F1F1',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F1F1F1',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#39FF14',
          },
          '& .MuiSelect-icon': {
            color: '#F1F1F1',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#39FF14',
          },
        }}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
Sort.displayName = 'Sort';
Sort.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.string,
  options: PropTypes.array,
};

export default Sort;
