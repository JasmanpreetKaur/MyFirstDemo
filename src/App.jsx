import { BrowserRouter,Route,Routes } from "react-router-dom";
import Demo_Add_Sign from "./Demo/Demo.jsx";
// import Login_Form from "./Main_File/Login_Form.jsx";
import Main_Window from "./Main_File/Main_Window.jsx";
import Add_City from "./Main_File/user/Add_City.jsx";
// import Sign_Up from "./Main_File/Sign_Up.jsx";
import VSign_Up from "./Main_File/user/VSign_Up.jsx";
import Change_Password from "./Main_File/user/Change_Password.jsx";
import UserNaveBar from "./Main_File/user/UserNaveBar.jsx";
import Carousel_2 from "./Main_File/user/Carousel_2.jsx";
import Cards from "./Main_File/user/Cards.jsx";
import Parent from "./context/Parent.jsx";
import HomePage from "./context/HomePage.jsx";
import About_Page from "./context/About_Page.jsx";
import ContactPage from "./context/ContactPage.jsx";
import {createContext, useState} from "react";
import Layout from "./context/Layout.jsx";
import DemoLogin from "./Demo/DemoLogin.jsx";
export  let MyContext = createContext(null);

export default function App(){
    let [cart,setCart] = useState(0)
    let [user,setUser] = useState(
        {
            name: "Johnson",
            age:23,
            city: "Jalandhar"
        }
    )
    return(
        <>
               <BrowserRouter>
                   {/*<MyContext.Provider value={{user,cart,setCart}}>*/}
                   <Routes>
                       {/*<Route path="/" element={<Layout/>}>*/}
                       {/*    <Route index element={<HomePage/>}/>*/}
                       {/*    <Route path="/about" element={<About_Page/>}/>*/}
                       {/*    <Route path="/contact" element={<ContactPage/>}/>*/}
                       {/*</Route>*/}
                       <Route path="/demo_sign" element={<Demo_Add_Sign/>}/>
                       {/* Main Route */}
                       <Route path="/home" element={<HomePage/>}/>
                       <Route path="/about" element={<About_Page/>}/>
                       <Route path="/contact" element={<ContactPage/>}/>
                       {/*<Route path="/sign_up" element={<Sign_Up/>}/>*/}
                       <Route path="/view_sign_up" element={<VSign_Up/>}/>
                       {/*<Route path="/main_Login" element={<Login_Form/>}/>*/}
                       <Route path="/main" element={<Main_Window/>}/>
                       <Route path="/user_navbar" element={<UserNaveBar/>}/>
                       <Route path="/car" element={<Carousel_2/>}/>
                       <Route path="/city" element={<Add_City/>}/>
                       <Route path="/card" element={<Cards/>}/>
                       <Route path="/c_password" element={<Change_Password/>}/>
                       <Route path="/parent" element={<Parent/>}/>
                       <Route path="/demo_login" element={<DemoLogin/>}/>

                   </Routes>
                   {/*</MyContext.Provider>*/}
               </BrowserRouter>
        </>
    )
}