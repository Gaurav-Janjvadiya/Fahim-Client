import { useQuery } from '@tanstack/react-query';
import {
  fetchLowestRatedProfessors,
  fetchMostRatedProfessors,
  fetchProfessorsByDepartment,
  fetchProfessorsByTitle,
} from '../api/filterProffessors';
import { getAllProfessors } from '../api/professorApi';

const useProfessors = (filterByTitle, filterByDepartment, sortOption) => {
  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      'professors',
      filterByTitle.title,
      filterByDepartment.department,
      sortOption,
    ],
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
