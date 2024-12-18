import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type = "text", name, value, onChange, ...props }, ref) => {
    return (
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        variant="outlined"
        fullWidth
        {...props}
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
    );
  }
);

export default Input;
