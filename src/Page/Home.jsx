import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
     <h1 className='home-h1'>✨ Hi, I’m Onuoha Japhet.</h1>

     <p className='home-p'>
      A self-taught frontend web developer 💻 
      passionate about transforming concepts 💡 into sleek, interactive designs 🎨⚡
     </p>

     <div className="home-input">
       <div className="wi">
         <div className='wi-h1 slide-hover' ><h1><Link to='/project' style={{color:'inherit', textDecoration:'none'}}>View Project</Link></h1></div>
        <div className='wi-h1 slide-hover'><h1><Link to='/about' style={{color:'inherit', textDecoration:'none'}}>About Me</Link></h1></div>
         
       </div>

       <div className="wi">
         <div className='wi-h1 slide-hover'><h1><Link to='/skill' style={{color:'inherit', textDecoration:'none'}}>My Skill</Link></h1></div>
         <div className='wi-h1 slide-hover'><h1><Link to='/' style={{color:'inherit', textDecoration:'none'}}>View Social</Link></h1></div>
         
       </div>

       <div className="wi">
        < div className='wi-h1 slide-hover'><h1><Link to='/contact' style={{color:'inherit', textDecoration:'none'}}>Contact Me</Link></h1></div>
         <div className='wi-h1 slide-hover'><h1><a href='' style={{color:'inherit', textDecoration:'none'}}>Download Cv</a></h1></div>
         
       </div>
     </div>
    </div>
  )
}

export default Home
