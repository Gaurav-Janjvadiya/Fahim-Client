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
  // (professor);

  return (
    <Link to={`/professors/${_id}`}>
      <div className="p-4 cursor-pointer border hover:border-[#39FF14] transition-all rounded space-y-3">
        <p className="text-xl font-bold text-[#39FF14]">
          <span className="mr-1">{title}</span>
          {name}
        </p>
        <p className="text-md">
          {department.name || "No department available"}
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

export default ProfessorInfo;
