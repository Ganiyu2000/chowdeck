import React from 'react'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import a5 from '../assets/a5.png'
import a6 from '../assets/a6.png'
import a7 from '../assets/a7.png'
import a8 from '../assets/a8.png'
import { FaTwitter } from "react-icons/fa";
import dot from '../assets/dot.png'
import pasta from '../assets/pasta.png'
import blog from '../assets/blog.png'
import king from '../assets/kingsley.png'
import agam from '../assets/agam.png'
import Marquee from 'react-fast-marquee';


function Review() {
  return (
    <section className="review">
      <div className='street'>
        <div className='cred'>
          <p style={{fontWeight: '800',fontSize: '29px'}}><img src={dot} alt="" /> Street Cred</p>
        </div>
        <div className='twit'>
          <p ><FaTwitter className='icon' />       Join our community</p>
        </div>
      </div >
      
      <Marquee behavior="" direction="">
        <div className='review-text'>
            <img src={a1} alt="" />
            <img src={a2} alt="" />
            <img src={a3} alt="" />
            <img src={a4} alt="" />
            <img src={a5} alt="" />
            <img src={a6} alt="" />
            <img src={a7} alt="" />
            <img src={a8} alt="" />
        </div>
      </Marquee>



      <div className='story'>
        <div className='stories' style={{paddingLeft:'5%'}}>
          <p style={{fontWeight: '800', fontSize: '63px'}}>Stories</p><img style={{marginTop:'-25px'}} src={pasta} alt="" />
        </div>

       < div className='container'>
          < div className='box'>
            <img src={blog} alt="" />

            <div className='box-text-container'>
              <p className='box-text'>CHOWDECK JOINS Y COMBINATOR'S S'22 BATCH</p>
              <p className='box-text2'>Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies that are dis...</p>
              <button>Read More</button>
            </div>
          

          </div>

          <div className='box'>
            <img src={king} alt="" />
            
            <div className='box-text-container'>
              <p className='box-text'>CHAMPIONS : KINGSLEY AGBINYA</p>
              <p className='box-text2'>Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...</p>
              <button>Read More</button>
            </div>
          </div>
          

          <div className='box'>
            <img src={agam} alt="" />
            
            <div className='box-text-container'>
              <p className='box-text'>CHAMPIONS : ANTHONY AGAM</p>
              <p className='box-text2'>Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.</p>
              <button>Read More</button>
            </div>
            

          </div>





        </div>
      </div>

    </section>
  )
}

export default Review
