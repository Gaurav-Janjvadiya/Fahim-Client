import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { getAllMajors } from '../../api/majorApi';

const FilterByDepartment = ({ filterByDepartment, setFilterByDepartment }) => {
  const {
    data: majors = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['majors'],
    queryFn: getAllMajors,
    staleTime: 600000,
    cacheTime: 900000,
    onError: (err) => {
      console.error('Error fetching majors:', err);
    },
    onSuccess: (data) => {
      console.log('Majors fetched successfully:', data);
    },
  });

  const handleFilterChange = (event, filterType) => {
    setFilterByDepartment((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };

  return (
    <FormControl
      component='fieldset'
      sx={{
        position: 'relative',
        zIndex: 1,
        marginTop: '1px',
        width: '100%',
        backgroundColor: '#1A1A1A',
      }}
    >
      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{ color: '#fff', marginBottom: '1px' }}
      >
        Department
      </Typography>
      <RadioGroup
        value={filterByDepartment?.department || ''}
        onChange={(e) => handleFilterChange(e, 'department')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiFormControlLabel-label': { color: '#fff' },
        }}
      >
        {isLoading ? (
          <CircularProgress size={20} />
        ) : error ? (
          <Typography color='error'>Error loading majors</Typography>
        ) : (
          majors.map((major) => (
            <FormControlLabel
              key={major._id}
              value={major._id}
              control={
                <Radio
                  sx={{
                    color: '#39FF14',
                    '&.Mui-checked': { color: '#39FF14' },
                  }}
                />
              }
              label={major.name}
              sx={{ '& .MuiFormControlLabel-label': { whiteSpace: 'nowrap' } }}
            />
          ))
        )}
      </RadioGroup>
    </FormControl>
  );
};

FilterByDepartment.propTypes = {
  filterByDepartment: PropTypes.object,
  setFilterByDepartment: PropTypes.func,
};

export default FilterByDepartment;
