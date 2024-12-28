import { useState } from 'react';
import {
  SearchBar,
  Sort,
  FilterBy,
  DataList,
  ProfessorItem,
} from '../components';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import useProfessors from '../hooks/useProfessors';

function Professors() {
  // const [filterAndSortOption, setFilterAndSortOption] = {
  //   filterByTitle: { title: '' },
  //   filterByDepartment: { department: '' },
  //   sortOption: '',
  // };
  const [filterByTitle, setFilterByTitle] = useState({ title: '' });
  const [filterByDepartment, setFilterByDepartment] = useState({
    department: '',
  });
  const [sortOption, setSortOption] = useState('');
  const [filteredProfessors, setFilteredProfessors] = useState([]);

  const { professors, isLoading, isError, error } = useProfessors(
    filterByTitle,
    filterByDepartment,
    sortOption,
  );

  const sortOptions = [
    { value: 'topProfessors', label: 'Top Professors' },
    { value: 'lowestRated', label: 'Lowest Rated Professors' },
  ];

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:p-8 p-4'>
        <SearchBar
          dataList={professors && professors}
          setFilteredDataList={setFilteredProfessors}
          searchOptionKeys={[
            {
              name: 'name',
              weight: 0.7,
            },
            {
              name: 'title',
              weight: 0.2,
            },
            {
              name: 'department.name',
              weight: 0.1,
            },
          ]}
        />
        <Sort
          statte={sortOption}
          setState={setSortOption}
          options={sortOptions}
        />
        <FilterBy
          filterByTitle={filterByTitle}
          setFilterByTitle={setFilterByTitle}
          filterByDepartment={filterByDepartment}
          setFilterByDepartment={setFilterByDepartment}
        />
      </div>

      <div className='flex justify-between items-start sm:p-8 p-4'>
        {isLoading ? (
          <div className='w-full h-[40vh] flex justify-center items-center'>
            <CircularProgress />
          </div>
        ) : (
          <DataList
            dataList={
              filteredProfessors.length > 0 ? filteredProfessors : professors
            }
            Child={ProfessorItem}
          />
        )}
      </div>

      {isError && (
        <div className='h-screen w-full flex justify-center items-center'>
          <Alert severity='error'>Error: {error.message}</Alert>
        </div>
      )}
    </div>
  );
}

export default Professors;
