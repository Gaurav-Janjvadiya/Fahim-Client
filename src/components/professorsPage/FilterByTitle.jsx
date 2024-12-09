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
                sx={{ color: "#39FF14", "&.Mui-checked": { color: "#39FF14" } }}
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
