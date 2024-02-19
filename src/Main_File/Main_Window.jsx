import '../design.css'
import UserNaveBar from "./user/UserNaveBar.jsx";
import Carousel_2 from "./user/Carousel_2.jsx";
import Card from "./user/Cards.jsx";
import React from "react";
const Main_Window = () =>{
    return(
        <>
            <UserNaveBar/>
            <Carousel_2/>
            <p className="text-center" style={{marginTop:"35px" ,fontSize:"35px" ,color:"#FA7E61"}}>𝑳𝒂𝒕𝒆𝒔𝒕 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒔</p>
            <Card/>
        </>
    )
}
export default Main_Window