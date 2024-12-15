import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      sx={{
        input: {
          color: "#F1F1F1", // Input text color
        },
        label: {
          color: "#F1F1F1", // Label color
        },
        fieldset: {
          borderColor: "#F1F1F1", // Border color
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#39FF14", // Border color on hover
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#39FF14", // Border color on focus
          },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#39FF14", // Label color on focus
        },
      }}
    />
  );
}

export default SearchBar;
