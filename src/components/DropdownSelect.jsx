import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const DropdownSelect = ({ label, value, onChange, options, labelId }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        width: "full",
      }}
    >
      <InputLabel
        id={labelId}
        sx={{
          color: "#F1F1F1",
          "&.Mui-focused": {
            color: "#39FF14",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={labelId}
        value={value}
        onChange={handleChange}
        label={label}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#1A1A1A",
              color: "#F1F1F1",
            },
          },
        }}
        sx={{
          color: "#F1F1F1",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F1F1F1",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#39FF14",
          },
          "& .MuiSelect-icon": {
            color: "#F1F1F1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#39FF14",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
