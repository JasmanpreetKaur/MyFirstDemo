import {useContext} from "react";
import {MyContext} from "../App.jsx";

export default function About_Page(){
    let abc= useContext(MyContext)
    console.log(abc)
    return(
        <>
            <h4>About Page</h4>
            <h6>Name:{abc.name}</h6>
        </>
    )
}