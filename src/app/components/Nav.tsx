'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import { clsx } from 'clsx';
import ptg from "./ptg.png"

type Props = {}

export default function NavBar({}: Props){

    const [isMenuOpen, setMenu] = useState(false);
    const [isShopOpen, setShopMenu] = useState(false);

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [quantity, setQuantity] = useState("Quantity:");
    const [delivery, setDelivery] = useState("");
    const [payment, setPayment] = useState("Please select a payment");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event)
    {
        setName(event.target.value);
    }

    function handleAgeChange(event)
    {
        setAge(event.target.value);
    }
    
    function handleQuantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function handleDeliveryChange(event)
    {
        setDelivery(event.target.value);
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }

    function handleShippingChange(event)
    {
        setShipping(event.target.value);
    }

    const imageUrl = './src/ptg.png'
    return (
        <main className="sticky top-0 bg-rose-200 border-black border z-50">
        <nav className="flex justify-between px-8 items-center py-6 ">
            <section className = "flex items-center gap-4">
                {/*Menu*/}
                <IconContext.Provider value = {{className: 'cursor-pointer',}}>
                                        <div onClick={() => {setMenu(true)}}>
                                        <FiMenu size = '2em'/>
                                        </div>
                                    </IconContext.Provider>
                {/*Logo*/}
                
                
                
                <Link href = {"/"} className ="text-md inline-flex">People Bake Group{<img className= "rounded-full ml-3 h-6" src = "https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_1280.png"></img>}</Link>
                
            </section>
            
            {/* sidebar mobile menu */}
            <div className={clsx("fixed h-full w-screen bg-black/50` backdrop-blur-sm top-0 right-0 -translate-x-full transition", isMenuOpen && "translate-x-0")}>
                <section className='text-black bg-white flex-col absolute left-0 top-0 
                                    h-screen p-8 gap-8 z-50 w-56 flex'>
                                    <IconContext.Provider value = {{className: 'cursor-pointer',}}>
                                        <div onClick={() => {setMenu(false)}}>
                                        <IoMdClose/>
                                        </div>
                                    </IconContext.Provider>
                                    
                                    <Link className = 'font-bold' href = {'/'} onClick={() => {setMenu(false)}}>Home</Link>
                                    <Link className = 'font-bold' href = {'about'} onClick={() => {setMenu(false)}}>Our Story</Link>
                                    <Link className = 'font-bold' href = {'services'} onClick={() => {setMenu(false)}}>Services</Link>
                                    <Link className = 'font-bold' href = {'contact'} onClick={() => {setMenu(false)}}>Contact</Link>

                </section>

            </div>




            <section className = "flex items-center gap-4">
            <ul className="flex items-center gap-5 text-sm">
                    <li> <a className = 'hover:underline hover:scale-110' href = {"/"}> Home </a> </li>
                    <li> <a className = 'hover:underline' href = {"about"}> Our Story </a> </li>
                    <li> <a className = 'hover:underline' href = {"services"}> Services </a> </li>
                    <li> <a className = 'hover:underline' href = {"contact"}> Contact </a> </li>
                </ul>
                
                <IconContext.Provider value = {{className: 'cursor-pointer',}}>
                                        <div onClick={() => {setShopMenu(true)}}>
                                        <CiShoppingCart size = '2em'/>
                                        </div>
                                    </IconContext.Provider>

                
                
            </section>

            <div className={clsx("fixed h-full w-screen bg-black/50` backdrop-blur-sm top-0 right-0 -translate-x-full", isShopOpen && "translate-x-0")}>
                <section className='text-black bg-white flex-col absolute right-0 top-0 
                                    h-screen p-8 gap-8 z-50 w-1/4 flex'>
                                    <IconContext.Provider value = {{className: 'cursor-pointer',}}>
                                        <div onClick={() => {setShopMenu(false)}}>
                                        <IoMdClose/>
                                        </div>
                                    </IconContext.Provider>
                                    
                                    <Link className = 'font-bold' href = {'#'} onClick={() => {setMenu(false)}}>Cart:</Link>
                                    <h1 className='text-sm font-extrabold'>Procced to Checkout: </h1>
                                    <input value = {name} onChange={handleNameChange} placeholder='Please enter a name'></input>
                                    <input value = {age} onChange={handleAgeChange} type="number" placeholder='Enter your age'></input>
                                    <input value = {quantity} onChange={handleQuantityChange} type = "number" placeholder='Quantity'></input>
                                    <textarea value = {delivery} onChange={handleDeliveryChange} placeholder = "Please enter any delivery notes" ></textarea>
                                    <select value = {payment} onChange={handlePaymentChange} >
                                        <option value = "">Select an option</option>
                                        <option value = "Visa">Visa</option>
                                        <option value = "Mastercard">Mastercard</option>
                                        <option value = "Giftcard">Giftcard</option>
                                    </select>
                                    <p>Payment: {payment}</p>
                                    <label>
                                        <input type = "radio" value = "Pick Up" 
                                            checked = {shipping === "Pick Up"} 
                                            onChange = {handleShippingChange} 
                                            className='mr-2'></input>
                                        Pick Up
                                    </label>
                                    <label>
                                        <input type = "radio" value = "Delivery"
                                            checked = {shipping === "Delivery"}
                                            onChange = {handleShippingChange}
                                            className='mr-2'></input>
                                        Delivery
                                    </label>
                                    <p>Shipping: {shipping}</p>
                                            </section>

                                        </div>
                                    </nav>
                                    <hr></hr>
                                    </main>
                                    

    )
}