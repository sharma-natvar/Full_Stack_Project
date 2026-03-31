import React from 'react'
import Footer from '../component/Footer'

const About = () => {
  return (
    <>
         <div className="container">
        <div className="w-100 d-flex justify-content-center flex-column" style={{height:'100vh'}}>
        <div className='d-flex'>
        <h1 className="text-start mb-4" style={{borderBottom:'1px solid #0562ed'}}>About Us.</h1>
        </div>
        <p className="fs-5 text-secondary" style={{textAlign:'justify'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa officia aperiam, vitae suscipit ea quia molestias perferendis libero assumenda repellat? Ex eaque fugit libero quis facere consequuntur unde enim culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum molestias nisi hic voluptatibus doloremque impedit delectus magnam, aliquid pariatur debitis esse harum, enim animi totam rerum culpa maiores inventore!
        </p>
        <p className="fs-5 text-secondary" style={{textAlign:'justify'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa officia aperiam, vitae suscipit ea quia molestias perferendis libero assumenda repellat? Ex eaque fugit libero quis facere consequuntur unde enim culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum molestias nisi hic voluptatibus doloremque impedit delectus magnam, aliquid pariatur debitis esse harum, enim animi totam rerum culpa maiores inventore!
        </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About