import {NavLink,Outlet} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../App.jsx";

export default function Layout (){
    let {cart} = useContext(MyContext)
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-success" type="CARD">Cart: {cart}</button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}