import React , { useRef , useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import {CircularProgress} from '@mui/material'

const Contact = () => {
   const [loading, setLoading] = useState(false);
   const form = useRef () 

  const sendEmail = (e) => {
    e.preventDefault() ;

    emailjs 
    .sendForm(
      'service_f4ymrpo',
      'template_ckwm5wk',
      form.current,
       'yQcrPxg3PWJmvSr8a'
    )
    .then(
      (result) => {
        console.log (result.text)
        alert('Your Meassage has been sent and will be review, expect our reply soon')
        setLoading(false);
      },
      (error) => {
        console.log(error.text)
        alert('Error sending message')
      }
      
   
    )
  }

  return (
    <div className='contacr'>
     <h2>Contact Me</h2>

     <p>Have a project in mind? Let’s collaborate and bring your ideas to life.</p>

     <div className="con-input" >

      <form action="" ref={form} onSubmit={sendEmail}>
       <label htmlFor="">Full Name</label> <br /> 
       <input type="text"  name='name' placeholder='Enter Full Name' required/> <br /> 

       <label htmlFor="">Email</label> <br /> 
       <input type="text" name='email' placeholder='Enter Email' required /> <br /> 

       <label htmlFor="">Subject</label> <br /> 
       <input type="text" name='address' placeholder='Subject' required/> <br /> 

       <label htmlFor="">Message</label> <br /> 
       
      <textarea name="message" id="" placeholder='message' required></textarea>

      <button>{loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Submitt"
          )}</button>

   </form>
     </div>
    </div>
  )
}

export default Contact
