import CourseItem from "./CourseItem";

function CourseList({ courseReviews }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
      {courseReviews.map((courseReview) => (
        <CourseItem key={courseReview._id} courseReview={courseReview} />
      ))}
    </div>
  );
}

export default CourseList;
