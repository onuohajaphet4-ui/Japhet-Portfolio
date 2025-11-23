import React ,{useState}from 'react'
import project4 from '../assets/project.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import './More.css'

const More = () => {
    const more =[
         {
           img: project4,
           title: 'react',
           text: 'taiwind',
           live:'Live ',
           a: 'https://j-thrift-swag-store-e-shop22.vercel.app/'
         },
          {
           img: project5,
           title: 'react',
           text: 'taiwind',
           live:'Live ',
           a:'https://j-thrift-swag-store-e-shop22.vercel.app/'
         },
          {
           img: project6,
           title: 'react',
           text: 'taiwind',
           live:'Live ',
           a: 'https://christopher-university-website.vercel.app/'
         }

  ]
   const [visible, setVisible] = useState(1);

    const loadMore = () => setVisible((prev) => prev + 1);

  return (

    <div  className='more'>
      <div className='con-flex'>
         <h1>
           Other Project
         </h1>

      {visible <more.length && (
         <button
         onClick={loadMore}>
          See More
         </button>
         )}
      </div>

       <div className="more" >
      {more.slice(0, visible).map((more, index) => (
      <div   >

          <div className="conimg" >
           <img src={more.img} alt=""  style={{width:'100%'}}/>
          </div>

          <div className='conflex' >
          
            <h4>{more.title}</h4>
              <h4>{more.text}</h4>

          </div>

          <div className="conh4 slide-hover">
            <a href={more.a} style={{color:'inherit' , textDecoration:'none'}}> {more.live}</a>
          </div>

      </div>
       ))}
       </div>

        <div className='view'>
        <p>View all projects on</p>

        <h4 className='h49 slide-hover'>
          <a href="https://github.com/onuohajaphet4-ui?tab=repositories" style={{color:'inherit', textDecoration:'none'}}>Github </a>
        </h4>
      </div>

    </div>
  )
}

export default More
