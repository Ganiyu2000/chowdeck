import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import play from "../assets/playstore.png";
import end from "../assets/end.png"
import promo from "../assets/promo.png";
import expl from '../assets/explore.png'
import sparkle from '../assets/sparkle.png'
import bag from '../assets/bag.png'

const faqData = [
  { id: "chowdeck", question: "What is Chowdeck?", answer: "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.", },
  { id: "locations", question: "What locations do we currently deliver to?", answer: "Answer for locations.", },
  { id: "wallet", question: "What is Chowdeck wallet?", answer: "Answer for Chowdeck wallet.", },
  { id: "chowscore", question: "What is Chowscore?", answer: "Answer for Chowscore.", },
  { id: "serviceFee", question: "What is Service fee?", answer: "Answer for Service fee.", },
  { id: "chargeServiceFee", question: "Why do we charge Service fee?", answer: "Answer for charge Service fee.", },
  { id: "surgeFee", question: "What is Surge fee?", answer: "Answer for Surge fee.", },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(faqData[0].id);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-questions">
          <h2>FAQs.</h2>
          {faqData.map(({ id, question }) => (
            <div key={id} className={`question ${activeId === id ? "active" : ""}`} onClick={() => setActiveId(id)}>{question}
            </div>
          ))}
        </div>
        <div className="faq-answers">
          <h2 style={{ color: '#0C513F' }}>Ans.</h2>
          <div className="ans">
            {faqData.map(({ id, answer }) => (
              <div key={id} className="answer" style={{ display: activeId === id ? "block" : "none" }}>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/****END****/}

      <div className="end">
        <div className="box">
          <div className="left">
            <div className="top">
              <h1>Place your <br />order in seconds</h1>
              <div className='btns'>
                <button><img src={play} style={{ width: '15px', height: '15px' }} alt="" />
                  <p>Download on Google Play</p>
                </button>
                <button>
                  <FaApple />
                  <p>Download on App Store</p>
                </button>
              </div>
            </div>
            <div className="box-bottom">
              <div className="promo">
                <img src={promo} alt="" />
                <button>CDNWEB</button>
                <p>Get <span>₦300 off</span> your first order when you use this promo code!</p>
              </div>

              <img src={expl} style={{ width: '210px' }} alt="" />
            </div>
          </div>
        </div>


        <div className="box">
          <img src={end} alt="" />

        </div>
      </div>

      <div className="last">
        <div className="left">
          <img src={sparkle} style={{width: '40px', height: '40px'}} alt="" />
          <p>Cool stuff only <span>Subscribe to our newsletter</span></p>
        </div>
        <img src={bag} alt="" />
      </div>
    </section>
  );
};

export default FAQ;
