import CourseItem from "./CourseItem";

function CourseList({ courses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
      {courses.map((course) => (
        <CourseItem key={course._id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
