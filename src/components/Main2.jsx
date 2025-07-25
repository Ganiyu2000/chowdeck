import React from "react";
import apple from "../assets/apple.png";
import play from "../assets/playstore.png";
import main2 from "../assets/main2.png";
import { FaArrowDown } from "react-icons/fa6";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import star from "../assets/star.png";
import { FaArrowRight } from "react-icons/fa6";
import start from "../assets/start.png";
import deliver from "../assets/deliver.png";
import behind from "../assets/behind.png";
import { GiMoon } from "react-icons/gi";

function Main2() {
  return (
    <section className="main-2">
      <ul className="btns">
        <button>Customers</button>
        <button>Vendors</button>
        <button>Riders</button>
      </ul>

      <h1>Try the App</h1>
      <p>
        Have meals delivered to you within minutes from a wide variety of
        restaurants ranging from African to Continental cuisines to satisfy your
        cravings.
      </p>
      <div className="icons">
        <div className="icon">
          <img src={play} alt="" />
        </div>

        <div className="icon">
          <img src={apple} alt="" />
        </div>
      </div>

      <div className="main-2-img">
        <img src={main2} alt="" />
      </div>

      <div className="join">
        <h1>
          Join our growing network <FaArrowDown />
        </h1>

        
        <div className="boxes">

          {/***sun***/}
          <div className="box">
            <div className="items">
            <img src={sun} alt="" />
            <h2>Start your day with us</h2>
            <p>Are you a restaurant owner looking to grow <br />
             your business? Reach new customers when <br />
              you join our network.</p>
            <p>SEE MORE <FaArrowRight /></p>
            </div>
            <img src={start} className="boximg" alt="" />
          </div>

          {/***moon***/}
          <div className="box">
            <div className="items">
            <img src={moon} alt="" />
            <h2>Deliver happiness</h2>
            <p>Join our elite league of delivery riders <br />
             delivering happiness to customers and earn to <br />
              achieve your dreams while at it.</p>
            <p>SEE MORE <FaArrowRight /></p>
            </div>
            <img src={deliver} className="boximg" alt="" />
          </div>

          {/***star***/}
          <div className="box">
            <div className="items">
            <img src={star} alt="" />
            <h2>Behind the scenes</h2>
            <p>If you are passionate about helping us achieve <br />
             our goal to delivermeals seamlessly, come <br />
             join the team.</p>
            <p>SEE MORE <FaArrowRight /></p>
            </div>
            <img src={behind} className="boximg" alt="" />
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Main2;
