import { useState } from 'react';
import { DataList, CourseItem, SearchBar, Sort } from '../components';
import { CircularProgress } from '@mui/material';
import FilterBy from '../components/coursesPage/FilterBy';
import useCourseReviews from '../hooks/useCourseReviews';

function Courses() {
  const [sortOption, setSortOption] = useState('');
  const [filterByCourse, setFilterByCourse] = useState({ course: '' });
  const [filterByProfessor, setFilterByProfessor] = useState({ professor: '' });
  const [filteredCourse, setFilteredCourse] = useState([]);
  const { isLoading, courseReviews } = useCourseReviews(
    sortOption,
    filterByCourse,
    filterByProfessor,
  );
  const sortOptions = [
    { value: 'topCourses', label: 'Top Courses' },
    { value: 'lowestRated', label: 'Lowest Rated Courses' },
  ];
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 sm:p-8 p-4 sm:grid-cols-3 md:grid-cols-3 gap-4'>
        <SearchBar
          dataList={courseReviews}
          setFilteredDataList={setFilteredCourse}
          searchOptionKeys={[
            {
              name: 'course.name',
              weight: 0.7,
            },
            {
              name: 'professor.name',
              weight: 0.3,
            },
          ]}
        />
        <Sort
          state={sortOption}
          setState={setSortOption}
          options={sortOptions}
        />
        <FilterBy
          courseReviews={courseReviews}
          filterByCourse={filterByCourse}
          setFilterByCourse={setFilterByCourse}
          filterByProfessor={filterByProfessor}
          setFilterByProfessor={setFilterByProfessor}
        />
      </div>
      <div className='sm:p-8 p-4'>
        {isLoading ? (
          <div className='flex items-center justify-center h-96'>
            <CircularProgress />
          </div>
        ) : courseReviews.length === 0 ? (
          <p className='text-center text-gray-500'>
            No courses available to display.
          </p>
        ) : (
          <DataList
            dataList={
              filteredCourse.length > 0 ? filteredCourse : courseReviews
            }
            Child={CourseItem}
          />
        )}
      </div>
    </div>
  );
}

export default Courses;
