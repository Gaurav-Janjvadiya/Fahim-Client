import { useParams, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function CourseItem({ courseReview }) {
  return (
    <Link to={`/courses/${courseReview._id}`}>
      <div className="border rounded hover:border-[#39FF14] space-y-3 p-4">
        <p className="text-lg font-semibold text-[#39FF14]">
          {courseReview.course.name}
        </p>
        <p>
          <span>By </span>
          {courseReview.professor.name}
        </p>
        <div className="flex justify-start items-center">
          <Rating
            name="half-rating-read"
            precision={0.1}
            value={courseReview.avgRating}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "gold", // Change filled star color
              },
              "& .MuiRating-iconEmpty": {
                color: "#F1F1F1", // Change empty star color
              },
              "& .MuiRating-iconHover": {
                color: "orange", // Change hover color of stars
              },
            }}
          />
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
