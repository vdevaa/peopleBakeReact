import Image from "next/image";
import Nav from "./components/Nav";
import CssGrid from "./components/CssGrid"
import MainComp from "./components/MainComp";
import Footer from "./components/Footer"
import Link from 'next/link';
import React from 'react'
import CardReview from "./components/CardReview";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  return (
  
  <div className=" flex flex-col gap-4 bg-[url(https://www.wallpaperboulevard.com/Images/product/light-pink-and-white-diagonal-stripe-pr-shqh-l.jpg)] bg-cover">
  
  
  <Nav></Nav>
  <CssGrid></CssGrid>
  <h2 className="mx-auto font-light font-sans text-3xl">Customer Reviews: </h2>
  <div className="flex flex-wrap justify-center mx-auto">
    <CardReview/>
    <CardReview></CardReview>
    <CardReview></CardReview>
    <CardReview/>
    <CardReview></CardReview>
    <CardReview></CardReview>
  </div>
 
  <Footer></Footer>
 
  </div>
  );
}
