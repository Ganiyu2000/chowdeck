import React from 'react'
import expl from '../assets/explore.png'
import { FaLocationDot } from "react-icons/fa6";
import sparkle from '../assets/sparkle.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import meal from '../assets/meal.png'
import pm from "../assets/pink-moon.png";
import span from "../assets/span.png";
import span1 from "../assets/span1.png";
import span2 from "../assets/span2.png";
import span3 from "../assets/span3.png";
import scroll1 from "../assets/scroll1.png";
import scroll2 from "../assets/scroll2.png";
import scroll3 from "../assets/scroll3.png";
import scroll4 from "../assets/scroll4.png";
import Marquee from 'react-fast-marquee';


function Main3() {
  return (
    <section className="main-3">
        <div className='explore'>
            <p>Explore categories</p>
            <img src={expl} alt="" />
            <div className='expl-b'>
                <ul className='right'>
                    <li><button><FaLocationDot /></button></li>
                    <li><button>1</button></li>
                    <li><button>2</button></li>
                    <li><button>3</button></li>
                    <li><button><img src={sparkle} alt="" /></button></li>
                </ul>

                <ul className='left'>
                    <li><button><FaArrowLeft /></button></li>
                    <li><button><FaArrowRight /></button></li>
                </ul>
            
        </div>
        </div>

        <div className='meal'>
            <div className='meal-text'>
                <p style={{marginRight: '-56px'}}>Chowdeck has you covered</p><img src={meal} alt="" />
            </div>
            
            
            <p style={{width:'567px', fontSize:'17px', fontWeight:'300'}}>Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.</p>
        </div>

        <Marquee className='scroll2'>
           <div className='scroll'>
           <img src={span} alt="" />
           <img src={span1} alt="" />
           <img src={span2} alt="" />
           <img src={span3} alt="" />
           <button><img src={pm} alt="" />20/7 support for customers and vendors</button>
         </div>
        </Marquee>

        <Marquee speed={30} className='scroll3'>
          <img style={{marginBottom:'115px'}} src={scroll1} alt="" />
          <img src={scroll2} alt="" />
          <img style={{marginBottom:'115px'}} src={scroll3} alt="" />
          <img src={scroll4} alt="" />
        </Marquee>


        <div>

        </div>

    </section>
  )
}

export default Main3
