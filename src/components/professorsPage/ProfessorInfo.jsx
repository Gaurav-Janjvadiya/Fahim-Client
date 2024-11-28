import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function ProfessorInfo({ professor = {} }) {
  const {
    _id,
    name = "Unknown",
    department = {},
    avgRating = null,
    title,
  } = professor;
  console.log(professor);

  return (
    <Link to={`/professors/${_id}`}>
      <div className="p-4 cursor-pointer border border-gray-300 rounded-xl min-w-fit space-y-4 m-2">
        <p className="text-xl font-bold text-[#0DFF15]">
          <span className="mr-1">{title}</span>
          {name}
        </p>
        <p className="text-md text-gray-600">
          Department : {department.name || "No department available"}
        </p>
        <p className="text-md text-gray-600">
          Credits : {department.credits || "No credits available"}
        </p>
        <p className="text-md text-gray-600">
          Department Year : {department.year || "No year available"}
        </p>
        <div className="flex justify-start gap-x-1 items-center">
          <Rating
            name="half-rating-read"
            precision={0.1}
            value={avgRating}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "gold", // Change filled star color
              },
              "& .MuiRating-iconEmpty": {
                color: "#F2F2F2", // Change empty star color
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

export default ProfessorInfo;
