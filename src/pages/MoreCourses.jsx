import { useQuery } from '@tanstack/react-query';
import { recommendTopCombinations, getEligibleCourses } from '../api/authApi';
import { useState } from 'react';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { Remove as RemoveIcon, Add as AddIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { DropdownSelect } from '../components';

const MoreCourses = () => {
  const [value, setValue] = useState(12);
  const [selectedOption, setSelectedOption] = useState('');

  const { data = [], isLoading } = useQuery({
    queryKey: ['courses', value, selectedOption],
    queryFn: () => {
      switch (selectedOption) {
        case 'recommendations':
          return recommendTopCombinations(value);
        // case "all_combinations":
        //   return recommendAllCombinations(value);
        case 'eligible_courses':
          return getEligibleCourses();
        default:
          return recommendTopCombinations(value);
      }
    },
    onSuccess: () => {
      console.log('done');
    },
    onError: () => {
      console.log('error');
    },
  });
  const accent = '#39FF14';
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  const StyledInputRoot = styled('div')(
    ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    `,
  );
  const StyledInput = styled('input')(
    ({ theme }) => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.375;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${
        theme.palette.mode === 'dark' ? grey[700] : grey[200]
      };
      box-shadow: 0 2px 4px ${
        theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
      };
      border-radius: 8px;
      margin: 0 8px;
      padding: 10px 12px;
      outline: 0;
      min-width: 0;
      width: 4rem;
      text-align: center;
    
      &:hover {
        border-color: ${accent}; 
      }
    
      &:focus {
        border-color: ${accent}; 
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === 'dark' ? accent : accent
        }; 
      }
    
      &:focus-visible {
        outline: 0;
      }
    `,
  );
  const StyledButton = styled('button')(
    ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      line-height: 1.5;
      border: 1px solid;
      border-radius: 999px;
      border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      width: 32px;
      height: 32px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        cursor: pointer;
        background: ${accent}; 
        border-color: ${accent}; 
        color: ${grey[50]};
      }
    
      &:focus-visible {
        outline: 0;
      }
    
      &.increment {
        order: 1;
      }
    `,
  );
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options = [
    { value: 'recommendations', label: 'Top 4/5 Recommendations' },
    { value: 'all_combinations', label: 'All Possible Combinations' },
    { value: 'eligible_courses', label: 'Eligible Courses Only' },
  ];

  return (
    <div className='sm:p-6 p-4 space-y-6'>
      <div className='grid grid-cols-2 w-full sm:space-x-4 space-x-0 sm:space-y-0 space-y-2 px-4 py-2'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#39FF14] text-xl sm:text-4xl mb-2 sm:mb-0'>
            Choose Credits
          </h1>
          <BaseNumberInput
            min={9}
            max={17}
            value={value}
            onChange={handleChange}
            slots={{
              root: StyledInputRoot,
              input: StyledInput,
              incrementButton: StyledButton,
              decrementButton: StyledButton,
            }}
            slotProps={{
              incrementButton: {
                children: <AddIcon fontSize='small' />,
                className: 'increment',
              },
              decrementButton: {
                children: <RemoveIcon fontSize='small' />,
              },
            }}
          />
        </div>
        <div className=''>
          <DropdownSelect
            onChange={handleOptionChange}
            value={selectedOption}
            options={options}
            labelId='morecourses'
          />
        </div>
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
                  {arrays?.map((array, innerIndex) => (
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
        {data.length <= 0 && !isLoading && <p>Not Found</p>}
      </div>
    </div>
  );
};

export default MoreCourses;
