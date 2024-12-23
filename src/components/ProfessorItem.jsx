import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Card } from ".";

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

export default ProfessorItem;
