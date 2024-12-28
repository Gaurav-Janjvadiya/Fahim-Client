import { Card } from '.';
import PropTypes from 'prop-types';

function ProfessorItem({ dataItem = {} }) {
  return (
    <Card
      linkTo={`/professors/${dataItem._id}`}
      title={`${dataItem.title} ${dataItem.name}`}
      subtitle={dataItem.department.name}
      rating={dataItem.avgRating}
    />
  );
}

ProfessorItem.propTypes = {
  dataItem: PropTypes.object,
};

export default ProfessorItem;
