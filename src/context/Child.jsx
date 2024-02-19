// eslint-disable-next-line react/prop-types
import Child_1 from "./Child_1.jsx";
import {useState} from "react";

const Child = ({name,course,myFunction,myFunction_1}) =>{
    let [age,setAge] =useState(21)
    let number = [10,20,30,40,50]
    let user = {
        name: "Rohan",
        course: "BCA",
        city :"Amritsar"
    }
    return(
        <>
            <h4>Hello Child Components..</h4>
            <p>Name: {name} || Course : {course}</p>
            <hr/>
            <button onClick={() => myFunction(number)} type="submit">Array_Value</button>
            <span>Data from child to parents(Array)</span>
            <hr/>
            <Child_1 Age={age}/>
            <span>Data from child to parents(Object)</span> <br/>
            <br/>
            <button onClick={() => myFunction_1(user)} type="submit">User_data</button> <hr/>
        </>
    )
}
export default Child