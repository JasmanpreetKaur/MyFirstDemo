import {useContext} from "react";
import {MyContext} from "../App.jsx";

export default function HomePage(){
    let abc= useContext(MyContext)
    console.log(abc)
    return(
        <>
            <h4>HOme Page</h4>
            <h6>city:{abc.city}</h6>

        </>
    )
}
// if we send the one array/ object then:-
// <MyContext.Provider value={user}>
// then redestruction krn time     =>let abc= useContext(MyContext)

// if we send the more then one array/ object then:-
// <MyContext.Provider value={{user,num}}>  ==> object under object
// then redestruction krn time===>      =>let {user,num}= useContext(MyContext)     => same name as we pass the the value 
