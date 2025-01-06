import { useQuery } from '@tanstack/react-query';
import {
  fetchLowestRatedProfessors,
  fetchMostRatedProfessors,
  fetchProfessorsByDepartment,
  fetchProfessorsByTitle,
} from '../api/filterProffessors';
import { getAllProfessors } from '../api/professorApi';
import { useMemo } from 'react';

const useProfessors = (filterByTitle, filterByDepartment, sortOption) => {
  const queryKey = useMemo(
    () => [
      'professors',
      filterByTitle.title,
      filterByDepartment.department,
      sortOption,
    ],
    [filterByTitle.title, filterByDepartment.department, sortOption],
  );

  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => {
      switch (filterByTitle.title) {
        case 'doctor':
          return fetchProfessorsByTitle('Dr.');
        case 'engineer':
          return fetchProfessorsByTitle('Eng.');
      }
      switch (filterByDepartment.department) {
        case '673f3140064450eb6c2530fa':
          return fetchProfessorsByDepartment('673f3140064450eb6c2530fa');
      }
      switch (sortOption) {
        case 'topProfessors':
          return fetchMostRatedProfessors();
        case 'lowestRated':
          return fetchLowestRatedProfessors();
      }
      return getAllProfessors();
    },
  });

  return {
    professors,
    isLoading,
    isError,
    error,
  };
};

export default useProfessors;
