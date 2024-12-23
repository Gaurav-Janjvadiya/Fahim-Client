import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Card({ linkTo = "#", title = "", subtitle = "", rating = null }) {
  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <MUICard
        raised={true}
        sx={{
          backgroundColor: "transparent",
          border: "1px solid #F1F1F1",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": {
            borderColor: "#39FF14",
          },
        }}
      >
        <CardContent sx={{ display: "grid" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#39FF14",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#F1F1F1",
            }}
          >
            {subtitle}
          </Typography>
          {rating !== null && (
            <Rating
              name="half-rating-read"
              precision={0.1}
              value={rating}
              readOnly
              sx={{
                marginTop: "15px",
                "& .MuiRating-iconFilled": {
                  color: "gold",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#F1F1F1",
                },
                "& .MuiRating-iconHover": {
                  color: "orange",
                },
              }}
            />
          )}
        </CardContent>
      </MUICard>
    </Link>
  );
}

export default Card;
