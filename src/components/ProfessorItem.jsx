import { Card } from '.';
import PropTypes from 'prop-types';
import { memo } from 'react';

const ProfessorItem = memo(({ dataItem = {} }) => {
  return (
    <Card
      linkTo={`/professors/${dataItem._id}`}
      title={`${dataItem.title} ${dataItem.name}`}
      subtitle={dataItem.department.name}
      rating={dataItem.avgRating}
    />
  );
});

ProfessorItem.displayName = 'ProfessorItem';

ProfessorItem.propTypes = {
  dataItem: PropTypes.object,
};

export default ProfessorItem;
