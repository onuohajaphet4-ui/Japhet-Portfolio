import React , {useState} from 'react'
import ThemeToggle from "./ThemeToggle"
import './Nav.css'
import p from '../assets/p.jpg'
import { IoHomeOutline, IoBriefcaseOutline, IoPersonAddOutline, IoCallOutline, IoDocumentTextOutline } from "react-icons/io5";
// import {MdClose} from 'react-icons/md'
import {Link} from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Nav = () => {
  const[open ,setOpen] = useState(false)

  return (
    <div className='main11'>
      <nav>

        <img src= {p} alt="" />
      
       {/* Dextop */}
      <div className="nav">
       <Link to='/' style={{color:'inherit'}}>  <IoHomeOutline size={33}   /> </Link>

       <Link to='/project'  style={{color:'inherit'}}>  <IoBriefcaseOutline size={33}  /></Link>

        <Link to='/about'  style={{color:'inherit'}}> <IoPersonAddOutline size={33} /></Link>

       <Link to='/contact'  style={{color:'inherit'}}>  <IoCallOutline size={33}/></Link>
        
         <IoDocumentTextOutline size={33}/>
    </div>

       {/* mobile ham */}
        <div  className="menu" onClick={() => setOpen(!open)}>
          <h1> menu</h1>

         

        </div>

        <div className={`overlay ${open ? "show" : ""}`} />

        {/* Mobile */}
        <div className={`mobile-nav ${open ? "show" : ""}`}>

         <Link to='/'  style={{color:'inherit'}}> <IoHomeOutline size={33}   onClick={() =>setOpen(false)} /> </Link>

        <Link to='/project'  style={{color:'inherit'}}><IoBriefcaseOutline size={33}  onClick={() =>setOpen(false)}  /></Link>

        <Link to='/about'  style={{color:'inherit'}}><IoPersonAddOutline size={33}  onClick={() =>setOpen(false)} /></Link>

        <Link to='/contact'  style={{color:'inherit'}}><IoCallOutline size={33}  onClick={() =>setOpen(false)} /></Link>
        
        <IoDocumentTextOutline size={30}  onClick={() =>setOpen(false)} />

        

        </div>
         <ThemeToggle style={{paddingTop:'200px'}}/>
      </nav>
      
    </div>
  )
}

export default Nav
