import React from 'react'
import './Skill.css'
import { IoLogoGithub , IoLogoReact, IoLogoJavascript , IoLogoHtml5 , IoLogoNodejs , IoLogoCss3 } from 'react-icons/io5'
const Skill = () => {
  return (
    <div className='skill'>
       <h2>Skills</h2>

       <div className="logg">

          <div className="log-con">

            <p>React</p>
           <IoLogoReact color='skyblue' size={50} />
          </div>

          <div className="log-con">
            <p>Javascript</p>
             <IoLogoJavascript  color='yellow' size={50}/>
          </div>

          <div className="log-con">
            <p>Html5</p>
            <IoLogoHtml5 color='orange' size={50}/>
          </div>

          <div className="log-con">
            <p>CSS3</p>
           <IoLogoCss3 color='blue' size={50} />
          </div>

          <div className="log-con">
            <p>Github</p>
            <IoLogoGithub  size={50}/>
          </div>

          <div className="log-con">
            <p>Node.js</p>
           <IoLogoNodejs size={50}/>
          </div>
       </div>
    </div>
  )
}

export default Skill
