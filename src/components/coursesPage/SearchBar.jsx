import { Box, IconButton } from "@mui/material";
import Fuse from "fuse.js";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Input } from "../";

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
        alignItems: "center",
        gap: 1,
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Input
        id="outlined-basic"
        label="Search"
        value={value}
        onChange={handleChange}
      />
      <div className="hover:bg-[#39FF141A] bg-[#1A1A1A] rounded-sm flex justify-center items-center h-14 w-14">
        <IconButton
          type="submit"
          sx={{
            color: "#39FF14",
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </Box>
  );
}

export default SearchBar;
