import { Card } from ".";

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

export default CourseItem;
