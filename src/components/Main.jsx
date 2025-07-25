import React from 'react'
import apple from '../assets/apple.png'
import play from '../assets/playstore.png'
import rider from '../assets/rider.png'
import Marquee from 'react-fast-marquee'

function main() {
  return (
    <section>
        <div className='main'>
        <h1>Se o ti jeun?</h1>
        <div className='btns'>
            <button><img src={play} alt="" />
            <p>Download on Google Play</p>
            </button>
            <button>
              <img src={apple} alt="" />
              <p>Download on App Store</p>
              </button>
        </div>
        </div>


      <Marquee className='marquee'><img src={rider} alt="" /></Marquee>

    </section>
  )
}

export default main
