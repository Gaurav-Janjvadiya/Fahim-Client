import { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

// Create a custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SortByComponent = () => {
  const [sortOption, setSortOption] = useState("");

  const handleChange = (event) => {
    setSortOption(event.target.value);
    // Add logic here to handle the selected sort option
  };

  // Use MUI's useMediaQuery hook to check screen size
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: 2,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          //   border: "1px solid white",
        }}
      >
        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            width: isMobile ? "full" : "300px",
          }}
        >
          <InputLabel id="sort-by-label" sx={{ color: "text.primary" }}>
            Sort By
          </InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortOption}
            onChange={handleChange}
            label="Sort By"
            sx={{
              backgroundColor: "background.default",
              color: "text.primary",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.primary",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary",
              },
            }}
          >
            <MenuItem value="topProfessors">Top Professors</MenuItem>
            <MenuItem value="recommended">Recommended</MenuItem>
            <MenuItem value="lowestRated">Lowest Rated Professors</MenuItem>
            <MenuItem value="average">Average Professors</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default SortByComponent;
