import { useState } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '../';

function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Q&A */}
      <Element className='faq'>
        <div className='w-full flex flex-col sm:flex-row sm:space-y-0 space-y-8 px-4 sm:px-12'>
          <div className='sm:w-1/2 flex justify-start items-start space-y-8 flex-col'>
            <h4 className='font-semibold text-[#39FF14]'>FAQs</h4>
            <h1 className='font-semibold text-wrap text-4xl'>
              Got Questions? We Have Answers!
            </h1>
            <Button type='' onClick={() => {}}>
              <Link to='/signup'>Get Started</Link>
            </Button>
          </div>
          <div className='sm:w-1/2 w-full'>
            <div className='overflow-hidden rounded-lg'>
              <Accordion
                sx={{
                  backgroundColor: '#1A1A1A',
                  color: '#F1F1F1',
                }}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F1F1F1' }} />}
                >
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
                sx={{ backgroundColor: '#1A1A1A', color: '#F1F1F1' }}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F1F1F1' }} />}
                >
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
                sx={{ backgroundColor: '#1A1A1A', color: '#F1F1F1' }}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F1F1F1' }} />}
                >
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
                sx={{ backgroundColor: '#1A1A1A', color: '#F1F1F1' }}
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F1F1F1' }} />}
                >
                  <Typography>
                    Can Fahim help students who are unsure what to take next
                    semester?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, Fahim provides tools to assist students in planning
                    their next semester by offering guidance on course selection
                    based on their academic progress and interests.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ backgroundColor: '#1A1A1A', color: '#F1F1F1' }}
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F1F1F1' }} />}
                >
                  <Typography>How can I join the Fahim team?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Anyone can join the Fahim team! We&rsquo;re always looking
                    for passionate individuals who want to make a difference in
                    education. For more information, contact us.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Faq;
