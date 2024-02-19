import Child_1 from "./Child_1.jsx";
import Child from "./Child.jsx";
import {useState} from "react";

const Parent = () =>{
    let [Name,setName] = useState("Jasmanpreet_Kaur")
    let [Course,setCourse] = useState("React_JS")
    let [number,setNumber] = useState([])
    let [user,setUser] = useState({})
    const showFunction = (num) =>{
        setNumber(num)
        console.log(num)
    }
    const showFunction_1 = (obj) =>{
        setUser(obj)
        console.log(obj)
    }
    return(
        <>
            <h4>Hello Parent Components..</h4>
            <hr/>
            <Child name={Name} course={Course} myFunction={showFunction} myFunction_1={showFunction_1}/>
            {
                number.map((value,index) =>{
                    return <p key={index}>{value}</p>
                })
            }
            <h4>user_Data</h4>
            <p>Name:- {user.name}</p>
            <p>Course:- {user.course}</p>
            <p>City:- {user.city}</p>

        </>
    )
}
export default Parent

// Parent  => child  =>  child_1