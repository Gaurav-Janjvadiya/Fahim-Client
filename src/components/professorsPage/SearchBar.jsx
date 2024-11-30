import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      sx={{
        input: {
          color: "#F2F2F2", // Input text color
        },
        label: {
          color: "#F2F2F2", // Label color
        },
        fieldset: {
          borderColor: "#F2F2F2", // Border color
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0DFF15", // Border color on hover
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#0DFF15", // Border color on focus
          },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#0DFF15", // Label color on focus
        },
      }}
    />
  );
}

export default SearchBar;
