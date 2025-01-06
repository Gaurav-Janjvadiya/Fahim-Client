import { Card } from '.';
import PropTypes from 'prop-types';
import { memo } from 'react';

const CourseItem = memo(({ dataItem }) => {
  return (
    <Card
      linkTo={`/courses/${dataItem._id}`}
      title={dataItem.course.name}
      subtitle={`Taught by ${dataItem.professor.name}`}
      rating={dataItem.avgRating}
    />
  );
});

CourseItem.displayName = 'CourseItem';

CourseItem.propTypes = {
  dataItem: PropTypes.object,
};

export default CourseItem;
