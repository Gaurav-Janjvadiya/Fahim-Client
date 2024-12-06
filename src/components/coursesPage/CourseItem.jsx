import { useParams, Link } from "react-router-dom";

function CourseItem({ course }) {
  return (
    <Link to={`/courses/${course._id}`}>
      <div className="border rounded hover:border-[#0A74DA] p-4">
        <p className="text-lg font-semibold text-[#0A74DA]">{course.name}</p>
        {course.major.map((mjr) => (
          <p key={mjr._id}>{mjr.name}</p>
        ))}
      </div>
    </Link>
  );
}

export default CourseItem;
