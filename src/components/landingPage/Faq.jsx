import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Faq() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212", // Dark background color
      },
      text: {
        primary: "#ffffff", // Text color for dark mode
      },
    },
  });

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Q&A */}
      <Element className="faq">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 text-center">
          Q&A
        </h1>
        <ThemeProvider theme={darkTheme}>
          <div style={{ padding: "20px" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What is Fahim?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Fahim is a platform designed to help students make informed
                  decisions about their education by simplifying course
                  selection and academic planning.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Is Fahim available for all universities?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, currently, Fahim is available only for Kuwait University
                  College of Petroleum and Engineering, specifically for the
                  Computer Engineering major. However, we hope to expand to
                  other majors within the College of Petroleum and Engineering
                  in the future.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Is Fahim only for students, or can educators use it too?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Fahim is primarily for students, but educators and advisors
                  can also use it to improve and support their students.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Can Fahim help students who are unsure what to take next
                  semester?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, Fahim provides tools to assist students in planning their
                  next semester by offering guidance on course selection based
                  on their academic progress and interests.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How can I join the Fahim team?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Anyone can join the Fahim team! We're always looking for
                  passionate individuals who want to make a difference in
                  education. For more information, contact us.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </ThemeProvider>
      </Element>
    </>
  );
}

export default Faq;
