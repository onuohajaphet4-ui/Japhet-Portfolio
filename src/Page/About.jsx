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
         A full-stack developer building modern web apps with React and scalable backend systems. I focus on clean code, performance, and seamless user experiences.
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
           Hi, I’m Onuoha Japhet a Professonal, full stack software developer.
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
            I’ve been on my tech journey for about 1year+ now, and I’ve been documenting it online for 400 days+.
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
            I design and develop responsive, modern web interfaces using HTML, CSS, JavaScript, Tailwind CSS, Mongodb, Express, Node.js, GitHub, React, and Next.js.
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
           I enjoy solving real problems by building clean, scalable full-stack applications that are both functional and user-friendly.          </Typography>
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
          Currently deepening my full-stack skills with React, backend development, APIs, and system design.
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
            My goal is to grow into a well-rounded Fullstack Developer and contribute to impactful projects that make a difference.
             withn the main intetion of integrating tech into  the daily life of every Nigerian or Even African at large 
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
            Outside of tech, I enjoy creating Swags and the fashion world — which is what inspired me to Create  J-Thrit Store . I also have a passion for Movies and Arts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

