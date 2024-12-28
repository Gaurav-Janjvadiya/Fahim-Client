import { Card } from '.';
import PropTypes from 'prop-types';

function CourseItem({ dataItem }) {
  return (
    <Card
      linkTo={`/courses/${dataItem._id}`}
      title={dataItem.course.name}
      subtitle={`Taught by ${dataItem.professor.name}`}
      rating={dataItem.avgRating}
    />
  );
}

CourseItem.propTypes = {
  dataItem: PropTypes.object,
};

export default CourseItem;
