import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import shopping_img from "./components/online-shopping_img.webp";

const Login_Form = () => {
    let { register, handleSubmit, formState: { errors }, reset } = useForm();
    let navigate = useNavigate();

    function onSubmit(argument) {
        console.log(argument);
        let data = new FormData();
        data.append("useremail", argument.useremail);
        data.append("password", argument.password);
        axios.post("http://192.168.29.217:9090/userCheckLogin", data).then((response) => {
            console.log(response);
            if (response.data !== "fail") {
                reset();
                navigate("/main");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{height:"100vh"}}>
                    {/* Left side */}
                    <div className="col-6" style={{ backgroundImage: `url(${shopping_img})`, backgroundRepeat:"no-repeat",backgroundSize:"100% 100vh"}}>
                        <img src={shopping_img} alt="Background" />
                    </div>

                    {/* Right side */}
                    <div className="col-6">
                        <div className="col-md-10">
                            <h1 style={{ color: "blueviolet" ,margin:"30px" }} className="text-center">
                                𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕆𝕦𝕣 𝕎e𝕓𝕤𝕚𝕥𝕖
                            </h1>
                            <br /><br/>
                        </div>

                        <div>
                            <div className="container" style={{background:"#AFCFD4",marginTop:"25px"}}>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label style={{ color: "green", fontSize: "20px",marginTop:"25px" }} htmlFor="useremail">
                                        𝐄𝐦𝐚𝐢𝐥:
                                    </label>
                                    <input
                                        {...register("useremail", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Please enter a valid email format",
                                            },
                                        })}
                                        type="text"
                                        id="useremail"
                                        name="useremail"
                                        placeholder="Enter the Email"
                                        className="form-control"
                                    />

                                    <ErrorMessage
                                        errors={errors}
                                        name="useremail"
                                        render={({ message }) => <p className="text-danger">{message}</p>}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label style={{ color: "green", fontSize: "20px" ,marginTop:"25px"}} htmlFor="password">
                                        𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝:
                                    </label>
                                    <input
                                        {...register("password", { required: "Enter the Password" })}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter the Password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ message }) => <p className="text-danger">{message}</p>}
                                    />
                                </div>

                                <div className="mb-3 text-end" style={{marginTop:"25px" }}>
                                    <span>Lost Password ? </span><Link to={"#"}className={"text-danger"}> Click here !</Link>
                                </div>

                                <div className="col-md-7 offset-md-3 container d-grid gap-2">
                                    <Button variant="outline-success" size="middle" type="submit"
                                            style={{marginTop: "25px", marginBottom: "15px"}}>
                                        𝐿𝑜𝑔𝒾𝓃_𝐼𝓃
                                    </Button>
                                    <div className="mb-3 text-center">
                                        <span>Don't Have an account </span>
                                        <Link style={{ color: "blueviolet",textDecoration: "none"}} to={"/Sign_Up"}>Sign_Up ?{" "}
                                    </Link>
                                    </div>

                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login_Form;
