import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const FilterByCourse = ({
  courseReviews,
  filterByCourse,
  setFilterByCourse = () => {},
}) => {
  const handleFilterChange = (event, filterType) => {
    setFilterByCourse((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };
  return (
    <div>
      <FormControl
        component="fieldset"
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "1px",
          width: "100%",
          backgroundColor: "#1A1A1A",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ color: "#fff", marginBottom: "1px" }}
        >
          Course
        </Typography>
        <RadioGroup
          value={filterByCourse?.course || ""}
          onChange={(e) => handleFilterChange(e, "course")}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .MuiFormControlLabel-label": { color: "#fff" },
          }}
        >
          {courseReviews.map((courseReview) => (
            <FormControlLabel
              key={courseReview.course.name}
              value={courseReview.course._id}
              control={
                <Radio
                  sx={{
                    color: "#39FF14",
                    "&.Mui-checked": { color: "#39FF14" },
                  }}
                />
              }
              label={
                courseReview.course.name.charAt(0).toUpperCase() +
                courseReview.course.name.slice(1)
              }
              sx={{ "& .MuiFormControlLabel-label": { whiteSpace: "nowrap" } }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FilterByCourse;
