import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        padding: "10px",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        placeholder="Search..."
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#333333",
            color: "white",
            borderRadius: "4px",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#555",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#777",
          },
        }}
      />
    </div>
  );
}

export default SearchBar;
