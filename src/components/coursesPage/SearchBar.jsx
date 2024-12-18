import { TextField, Box } from "@mui/material";
import Fuse from "fuse.js";
import { useState } from "react";

function SearchBar({ courses, setFilteredCourse }) {
  const [value, setValue] = useState("");

  const searchOptions = {
    tokenize: true,
    threshold: 0.3,
    keys: [
      {
        name: "course.name",
        weight: 0.7,
      },
      {
        name: "professor.name",
        weight: 0.3,
      },
    ],
    shouldSort: true,
    minMatchCharLength: 1,
    ignoreLocation: true,
    tokenizeSeparator: /[\s,-]+/,
  };

  const fuse = new Fuse(courses, searchOptions);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setFilteredCourse([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    const results = fuse.search(value).map((result) => result.item);
    setFilteredCourse(results);
    console.log(results);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search Courses"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
        sx={{
          input: {
            color: "#F1F1F1",
          },
          label: {
            color: "#F1F1F1",
          },
          fieldset: {
            borderColor: "#F1F1F1",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#39FF14",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#39FF14",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#39FF14",
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
