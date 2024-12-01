import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const FilterByTitle = ({ filterByTitle, setFilterByTitle = () => {} }) => {

  const handleFilterChange = (event, filterType) => {
    setFilterByTitle((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };

  return (
    <FormControl component="fieldset" sx={{ position: "relative", zIndex: 1 }}>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#fff" }}>
        Title
      </Typography>
      <RadioGroup
        value={filterByTitle?.title || ""}
        onChange={(e) => handleFilterChange(e, "title")}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiFormControlLabel-label": { color: "#fff" },
        }}
      >
        {["doctor", "engineer"].map((title) => (
          <FormControlLabel
            key={title}
            value={title}
            control={
              <Radio
                sx={{ color: "#0DFF15", "&.Mui-checked": { color: "#0DFF15" } }}
              />
            }
            label={title.charAt(0).toUpperCase() + title.slice(1)}
            sx={{ "& .MuiFormControlLabel-label": { whiteSpace: "nowrap" } }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterByTitle;
