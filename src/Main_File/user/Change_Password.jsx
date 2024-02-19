import React from "react";
import {useForm} from "react-hook-form";
// import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import UserNaveBar from "./UserNaveBar.jsx";
const Change_Password = () =>{
    let { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (argument) =>{
        console.log(argument)
        let formData = new FormData();
        formData.append("useremail",argument.useremail)
        formData.append("oldpassword",argument.curr_password)
        formData.append("newpassword",argument.new_password)
        formData.append("conform_password",argument.conform_password)
        console.log(argument.useremail,argument.curr_password,argument.new_password,argument.conform_password)
        if (argument.new_password === argument.conform_password){
        axios.post("http://192.168.29.217:9090/userChangePassword", formData)
            .then((response) => {
                console.log(response);
                if (response.data === "success"){
                    reset();
                    Swal.fire("Password Has been Updated...");
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Ohhh..",
                        text: "Something went wrong!",

                    });
                }
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Change_Password_Error",
                text: "New_Password and Conform_ Password have not Match..",

            });
        }

    }
    return(
        <>
            <div className="container-fluid">
                <UserNaveBar/>
                <div className="col-md-8 offset-2">
                    <h1 style={{color: "blueviolet", margin: "30px"}} className="text-center">
                        ℂ𝕙𝕒𝕟𝕘𝕖_ℙ𝕒𝕤𝕤𝕨𝕠𝕣𝕕
                    </h1>
                    <br/>
                </div>
                <hr/>
                <div className="container" style={{background: "#b6d9d9", marginTop: "25px", marginBottom: "25px"}}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        {/*email*/}
                        <div className="mb-3">
                            <label style={{color: 'blue'}} htmlFor="useremail"
                                   className="form-label">User_Email: </label>
                            <input {...register('useremail', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email format',
                                },
                            })}
                                   type="email" id="useremail" className="form-control"/>
                        </div>
                        {/*old-password*/}
                        <div className="mb-3">
                            <label style={{color: 'blue'}} htmlFor="password"
                                   className="form-label">User_CurrentPassword: </label>
                            <input {...register('curr_password', {required: 'This is a required field.'})}
                                   type="password"
                                   name="curr_password" id="curr_password" className="form-control"/>
                            <ErrorMessage
                                errors={errors}
                                name="curr_password"
                                render={({message}) => <p className='text-danger'>{message}</p>}
                            />
                        </div>
                        {/*new-password*/}
                        <div className="mb-3">
                            <label style={{color: 'blue'}} htmlFor="new_password"
                                   className="form-label">User_NewPassword: </label>
                            <input {...register('new_password', {required: 'This is a required field.'})}
                                   type="password"
                                   name="new_password" id="new_password" className="form-control"/>
                            <ErrorMessage
                                errors={errors}
                                name="new_password"
                                render={({message}) => <p className='text-danger'>{message}</p>}
                            />
                        </div>
                        {/*conform-password*/}
                        <div className="mb-3">
                            <label style={{color: 'blue'}} htmlFor="conform_password"
                                   className="form-label">User_ConformPassword: </label>
                            <input {...register('conform_password', {required: 'This is a required field.'})}
                                   type="password"
                                   name="conform_password" id="conform_password" className="form-control"/>
                            <ErrorMessage
                                errors={errors}
                                name="conform_password"
                                render={({message}) => <p className='text-danger'>{message}</p>}
                            />
                        </div>
                        <div className="mb-3  py-4 text-center w-100">
                            <Button type='submit' variant="outline-success">Reset_Password</Button>
                        </div>
                    </form>

                </div>

            </div>


        </>
    )
}
export default Change_Password