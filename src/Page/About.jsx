import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './About.css'

export default function AccordionExpandIcon() {
  return (
    <div className='about'>

      <h2>
        About Me 
      </h2>

      <h4>
        Hi , i'm Japhet👋😊
      </h4>

      <p>
        I turn UI ideas into real, working React projects.Fast learner. Pixel-perfection lover.
       If it slides, fades, animates, or transforms — I’m interested 😂.
      I enjoy creating smooth, responsive and interactive user experiences that feel modern and alive.
      </p>
      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>Who am I?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
           Hi, I’m Onuoha Japhet a Professonal, entry-level frontend web developer currantly learning Backend.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>How long have I been in tech?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            I’ve been on my tech journey for about 3-4months now, and I’ve been documenting it online for 100 days.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>What do I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            I design and develop responsive, modern web interfaces using HTML, CSS, JavaScript, Tailwind CSS,  Git, GitHub, React, and Next.js.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>What inspires me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            I’m inspired by solving problems with code and creating sleek, interactive designs that people enjoy using
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>What am I learning?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            I’m currently diving deeper into React and exploring Next.js for full-stack development.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{fontSize:'20px'}}>What’s my goal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            My goal is to grow into a well-rounded frontend engineer and contribute to impactful projects that make a difference.
             withn the main intetion of interating tech into  the daily life of every Nigerian or Even African at large 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion  style={{borderRadius:'10px' , borderBottom:'1px white solid'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="h1" style={{fontSize:'20px'}}>What’s my personality outside tech?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'17px'}}>
            Outside of tech, I enjoy creating Swag and the fashion world — which is what inspired me to Create  J-Thrit Store . I also have a passion for Movies and Arts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

