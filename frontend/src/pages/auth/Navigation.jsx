import React from 'react'
import { useState } from 'react'
import { AiOutlineHome, AiOutlineShopping, AiOutlineLogin, AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false)

    const toggleDropdown = () => {
        setDropDownOpen(!dropDownOpen)
    }

    const toggleSidebar = () => {
        setShowSideBar(!showSideBar)
    }

    const closeSidebar = () => {
        setShowSideBar(false)
    }

    return (
        <div
            style={{ zIndex: 999 }}
            className={`${showSideBar ? "hidden" : 'flex'} xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[4%] hover:w-[15%] h-[100vh] fixed`}
            id='navigation-container'
        >
            {/* Top Section - Navigation Links */}
            <div className="flex flex-col justify-center space-y-4">
                <Link
                    to=""
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
                    <span className="hidden nav-item-name mt-[3rem]">HOME</span>
                </Link>

                <Link
                    to="/shop"
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
                    <span className="hidden nav-item-name mt-[3rem]">SHOP</span>
                </Link>

                <Link
                    to="/cart"
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
                    <span className="hidden nav-item-name mt-[3rem]">CART</span>
                </Link>

                <Link
                    to="/favorite"
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <FaRegHeart className="mr-2 mt-[3rem]" size={26} />
                    <span className="hidden nav-item-name mt-[3rem]">FAVORITE</span>
                </Link>
            </div>

            {/* Bottom Section - Login/Register */}
            <ul className="mt-auto space-y-4">
                <li>
                    <Link
                        to="/login"
                        className="flex items-center transition-transform transform hover:translate-x-2"
                    >
                        <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
                        <span className="hidden nav-item-name mt-[3rem]">LOG-IN</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="flex items-center transition-transform transform hover:translate-x-2"
                    >
                        <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
                        <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation