import React  from 'react'
import './Project.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
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
        <img src={project1} alt="" />
        </div>

        <div className="con-info">
          <h1>Zynox Store </h1>
          <p>Online Gadget Store</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4>
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
        <img src={project2} alt="" />
        </div>

        <div className="con-info">
          <h1>J-Thrift Store</h1>
          <p>Online Clothes Shopping Mail</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Tailwind Css</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://j-thrift-store.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/J-THRIFT-STORE" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'><Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      


      <div className="contact-card">
        <div className="con-img">
        <img src={project3} alt="" />
        </div>

        <div className="con-info">
          <h1 style={{color:'coral'}}>ProRoz </h1>
          <p>Web Development Learning Courses</p>

          <div className="conflex1">
             <h4>React</h4>
             <h4>Javascript</h4>
          </div>

          <div className="conflex2">
            <h4 className='h44 slide-hover'><a href="https://pro-roz-web-development.vercel.app/" style={{textDecoration:'none' , color:'inherit'}}>Live</a></h4>
            <h4  className='h44 slide-hover'><a href="https://github.com/onuohajaphet4-ui/ProRoz-Web-Development" style={{textDecoration:'none' , color:'inherit'}}>Github</a></h4>
          </div>

          <h4 className='con-h4 slide-hover'> <Link to='/zynox' style={{textDecoration:'none' , color:'inherit'}}>Project Details</Link></h4>
        </div>
      </div>

      <More/>

     


      
       
    </div>
  )
}

export default Skill
