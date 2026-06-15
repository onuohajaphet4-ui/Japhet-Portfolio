import React  from 'react'
import './Project.css'
import project1 from '../assets/project1.png'
import project7 from '../assets/project7.png'
import project3 from '../assets/yati.png'
import pastry from '../assets/pastry.jpg'
import aegis from '../assets/Aegis.png'
import More from '../Component/More'
import {Link} from 'react-router-dom'
const Skill = () => {
  

    
  return (
    <div className='project'>
      <h2>
        Projects
      </h2>
      
      <div className="contact-card">
        <div className="con-img">
        <img src={aegis} alt="" />
        </div>

        <div className="con-info">
          <h1>AEGIS LEGAL PARTNERS</h1>
          <p>Professional Law Firm Website</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4> 
          </div>

           <div className="conflex1">
             <h4>Express</h4>
             <h4>MongoDb</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://aegis-legal.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/AEGIS-LEGAL" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'><Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      <div className="contact-card">
        <div className="con-img">
        <img src={pastry} alt="" />
        </div>

        <div className="con-info">
          <h1>QUEENDY PASTRY</h1>
          <p>Online Pastry Store</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4> 
          </div>

           <div className="conflex1">
             <h4>Express</h4>
             <h4>MongoDb</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://queeny-pastry.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/Queeny-Pastry-frontend-" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'><Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      <div className="contact-card">
        <div className="con-img">
        <img src={project7} alt="" />
        </div>

        <div className="con-info">
          <h1>YATI PERFUME STORE</h1>
          <p>Online Perfume Store</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4> 
          </div>

           <div className="conflex1">
             <h4>Express</h4>
             <h4>MongoDb</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://yati-eight.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/Yati" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'><Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      <div className="contact-card">
        <div className="con-img">
        <img src={project1} alt="" />
        </div>

        <div className="con-info">
          <h1>Zynox Store </h1>
          <p>Online Gadget Store</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4>
          </div>

          <div className="conflex1">
             <h4>Express</h4>
             <h4>MongoDb</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://project-work-pi.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'> <a href="https://github.com/onuohajaphet4-ui/Project-work" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'><Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>


      
      <div className="contact-card">
        <div className="con-img">
        <img src={project3} alt="" />
        </div>

        <div className="con-info">
          <h1 >ERIC Barbershop </h1>
          <p>E-shop Barbershop</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Javascript</h4>
          </div>

          <div className="conflex1">
             <h4>Express</h4>
             <h4>MongoDb</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://work-one-phi.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/work" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'> <Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      <More/>

     


      
       
    </div>
  )
}

export default Skill
