import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDropdown } from "react-icons/io";
import menu from '../assets/menu.png'
import close from '../assets/close.png'

function Head() {
    const [isOpen, setIsOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    return (
        <section className='head'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <p>Chowdeck</p>
            </div>

            <ul className="desktop-nav">
                <li><a href="">Company</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Content</a></li>
            </ul>

            <div className='left-nav'>
                <div className='dropdown'>
                    <button onClick={() => setIsOpen(!isOpen)} className='btn'>
                        Customers <IoIosArrowDropdown className='arrow' />
                    </button>
                    {isOpen && <ul className='cus'>
                        <li>Customer 1</li>
                        <li>Customer 2</li>
                        <li>Customer 3</li>
                    </ul>}
                </div>
                <LuShoppingCart className='cart' />
            </div>

            {/* Mobile menu button */}
            <div className='mobile-nav'>
            <LuShoppingCart className='cart' />
            <button className="menu-btn" onClick={() => setIsToggled(!isToggled)}>
                <img style={{width:'12px'}} src={isToggled ? close : menu} alt="menu" />
            </button>
            </div>

            {/* Mobile menu */}
            {isToggled && (
                <div className='mobile-menu'>
                    <ul>
                        <li><a href="">Company</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Content</a></li>
                        <div className='dropdown'>
                            <button onClick={() => setIsOpen(!isOpen)} className='btn'>
                                Customers <IoIosArrowDropdown className='arrow' />
                            </button>
                            {isOpen && <ul className='cus'>
                                <li>Customer 1</li>
                                <li>Customer 2</li>
                                <li>Customer 3</li>
                            </ul>}
                        </div>
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Head
