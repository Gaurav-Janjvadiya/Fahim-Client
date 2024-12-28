import { memo, useState } from 'react';
import { Handle } from '@xyflow/react';
import { Box, Checkbox, Typography } from '@mui/material';
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux actions
import { addCourse, removeCourse } from '../redux/store'; // Import your actions
import { nodes } from '../data';
import PropTypes from 'prop-types';

const CustomNode = ({ data }) => {
  const [isSelected, setIsSelected] = useState(data?.checked);
  const dispatch = useDispatch(); // Initialize dispatch

  const commonStyle = {
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleClick = () => {
    const node = nodes.find((node) => node.data.label === data.label);
    node.data.checked = !node.data.checked;
    setIsSelected(node.data.checked);

    // Dispatch addCourse or removeCourse based on the new checked state
    if (node.data.checked) {
      dispatch(addCourse(node.id)); // Add course to state
    } else {
      dispatch(removeCourse(node.id)); // Remove course from state
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        ...commonStyle,
        padding: '10px',
        width: '150px',
        flexDirection: 'column',
        border: '1px solid #333',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: '#121212', // Consistent background
      }}
    >
      <Handle
        type='target'
        position='top'
        style={{ background: '#888', borderRadius: '50%' }}
      />
      <Box
        sx={{
          ...commonStyle,
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <Checkbox
          inputProps={{ 'aria-label': `Checkbox for ${data.label}` }}
          checked={isSelected}
          sx={{
            color: '#ffffff',
            '&.Mui-checked': { color: '#90caf9' },
            padding: '4px',
            marginRight: '10px',
          }}
        />
        <Typography
          variant='body2'
          sx={{
            border: '1px solid #333',
            color: '#ffffff',
            padding: '6px 12px',
            textAlign: 'center',
            borderRadius: '8px',
            flex: 1,
            fontSize: 'big',
          }}
        >
          {data.label || 'Unnamed Node'}
        </Typography>
      </Box>
      <Handle
        type='source'
        position='bottom'
        style={{ background: '#888', borderRadius: '50%' }}
      />
    </Box>
  );
};

CustomNode.propTypes = {
  data: PropTypes.object,
};

export default memo(CustomNode);
