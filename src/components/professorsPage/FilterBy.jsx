import { useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import FilterByTitle from './FilterByTitle';
import FilterByDepartment from './FilterByDepartment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const FilterBy = ({
  filterByTitle,
  setFilterByTitle,
  filterByDepartment,
  setFilterByDepartment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilters = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Box
      onClick={toggleFilters}
      className='cursor-pointer border py-1 sm:px-8 px-4 hover:border-[#39FF14] rounded flex flex-col justify-center relative'
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        gap={1}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          gap={1}
        >
          <FilterAltIcon />
          <Typography variant='h6'>Filter</Typography>
        </Box>
        <IconButton>
          {isExpanded ? (
            <ExpandLessIcon className='text-[#F1F1F1]' />
          ) : (
            <ExpandMoreIcon className='text-[#F1F1F1]' />
          )}
        </IconButton>
      </Box>

      <Collapse in={isExpanded} timeout='auto' unmountOnExit>
        <Box
          mt={2}
          p={4}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
            backgroundColor: '#1A1A1A',
            zIndex: 1000,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <FilterByTitle
            filterByTitle={filterByTitle}
            setFilterByTitle={setFilterByTitle}
          />
          <FilterByDepartment
            filterByDepartment={filterByDepartment}
            setFilterByDepartment={setFilterByDepartment}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

FilterBy.propTypes = {
  filterByTitle: PropTypes.func.isRequired,
  setFilterByTitle: PropTypes.func.isRequired,
  filterByDepartment: PropTypes.func.isRequired,
  setFilterByDepartment: PropTypes.func.isRequired,
};

export default FilterBy;
