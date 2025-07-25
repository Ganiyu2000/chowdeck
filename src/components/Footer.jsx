import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import image from '../assets/image.png';
import footer from '../assets/footer.png';



function Footer() {
  return (
    <section className='footer'>
      <div className='mail'>
        <p>ganiyubabatunde35@gmail.com</p>
        <FaArrowRight style={{width: '36px', height: '36px', color: '#8C77EC'}} />
      </div>

      <div className='footer-content'>
        <img src={footer} style={{ width: '128px', height: "128px" }} alt="" />
        <div className='items'>
          <h3>COMPANY</h3>
          <ul>
            <li>Customers</li>
            <li>Vendors</li>
            <li>Riders</li>
            <li>Storefront</li>
            <li>About</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Bolg</li>
            <li>Content</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='items'>
          <h3>CUISINES NEAR BY</h3>
          <ul>
            <li>Pasta near me</li>
            <li>Rice near me</li>
            <li>Fast food near me</li>
            <li>Asian food in Lagos</li>
            <li>African food in Lagos</li>
            <li>Breakfast menu in Lagos</li>
            <li>Fitfam stores in Lagos</li>
            <li>American food in Lagos</li>
            <li>Pastries in Lagos</li>
            <li>Salad in Lagos</li>
            <li>Fruits in Lagos</li>
          </ul>
        </div>

        <div className='items'>
          <h3>POPULEAR</h3>
          <ul>
            <li>Food delivery</li>
            <li>Surulere</li>
            <li>Ogudu</li>
            <li>Yaba</li>
            <li>Ikeja</li>
            <li>Lekki</li>
            <li>King Glab</li>
            <li>Korede Spagehetti</li>
            <li>Iyan Aladuke</li>
            <li>Food fusion</li>
            <li>Belefull</li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='log'>
          <img src={image} alt="log" />
          <p>Chowdeck</p>
        </div>
        <div className='social'>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>linkIn</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Footer
