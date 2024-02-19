// import axios from 'axios'
// import { useForm } from "react-hook-form"
// import { ErrorMessage } from '@hookform/error-message';
// import Button from 'react-bootstrap/Button'
// import Swal from 'sweetalert2'
// import {Link, useNavigate} from "react-router-dom";
// import React, {useEffect, useState} from "react";
// import Modal from 'react-bootstrap/Modal';
// import UserNaveBar from "./user/UserNaveBar.jsx";
// import {GrDocumentUpdate} from "react-icons/gr";
//
// function Sign_Up() {
//     //For model
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//
//     // // for form
//     let {register, handleSubmit, formState: {errors}, reset  } = useForm()
//
//     // // for view
//     let navigate= useNavigate();
//     let [ user, setUser] = useState([]);
//
//     const addStudent = () => {
//         axios.post("http://192.168.29.217:9090/allUsers")
//             .then((response) => {
//                 // console.log(response.data);
//                 // console.log(response.data);
//                 setUser(response.data.ans)
//                 // console.log(response.data.ans)
//             })
//     }
//     useEffect(() => {
//         addStudent();
//     }, [])
//     // function of insert the user
//     function onSubmit(Param) {
//         console.log(Param)
//         // console.log(Param.photo[0])
//         let formData = new  FormData()
//         formData.append("useremail",Param.useremail)
//         formData.append("photo", Param.photo[0])
//         formData.append("username", Param.username)
//         formData.append("password", Param.password)
//         formData.append("phoneno", Param.mobile)
//         formData.append("address", Param.address)
//         // console.log(Param.username,Param.useremail,Param.password,Param.phoneno,Param.address,Param.photo[0])
//         axios.post("http://192.168.29.217:9090/userSignup", formData)
//             .then((response) => {
//                 console.log(response);
//                 if (response.data === "success"){
//                     reset();
//                     Swal.fire("Students Data Has been Added...");
//                 }
//                 else{
//                     Swal.fire({
//                         icon: "error",
//                         title: "Ohhh..",
//                         text: "Something went wrong!",
//
//                     });
//                 }
//             })
//     }
//     return (
//         <>
//             <div className="container-fluid">
//                 <UserNaveBar/>
//                 <div className="row">
//                     <div className="col-sm-10"><h1 className="text-center" style={{color: 'blueviolet'}}>𝐀𝐃𝐃_𝐔𝐒𝐄𝐑</h1></div>
//                     <div className="col-sm-1">
//                         <Button variant="primary" onClick={handleShow} style={{marginTop:"14px"}}>
//                             𝐀𝐃𝐃_𝐔𝐒𝐄𝐑
//                         </Button>
            {/*            <Modal show={show} onHide={handleClose}>*/}
            {/*                <Modal.Header closeButton>*/}
            {/*                    <Modal.Title>𝐀𝐃𝐃_𝐔𝐒𝐄𝐑</Modal.Title>*/}
            {/*                </Modal.Header>*/}
            {/*                <Modal.Body>*/}
            {/*                    <div className="col-md-10 offset-md-1 ">*/}
            {/*                        <form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*                            /!* name *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} htmlFor="username"*/}
            {/*                                       className="form-label">User_Name: </label>*/}
            {/*                                <input {...register('username', {required: 'This is a required field.'})}*/}
            {/*                                       name="username"*/}
            {/*                                       type="text" id={"username"} className="form-control"/>*/}
            {/*                            </div>*/}
            {/*                            <ErrorMessage*/}
            {/*                                errors={errors}*/}
            {/*                                name="username"*/}
            {/*                                render={({message}) => <p className='text-danger'>{message}</p>}*/}
            {/*                            />*/}

            {/*                            /!* Email *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} htmlFor="useremail"*/}
            {/*                                       className="form-label">User_Email: </label>*/}
            {/*                                <input {...register('useremail', {*/}
            {/*                                    required: 'Email is required',*/}
            {/*                                    pattern: {*/}
            {/*                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,*/}
            {/*                                        message: 'Please enter a valid email format',*/}
            {/*                                    },*/}
            {/*                                })}*/}
            {/*                                       type="email" id="useremail" className="form-control"/>*/}
            {/*                            </div>*/}

            {/*                            /!* password *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} htmlFor="password"*/}
            {/*                                       className="form-label">User_Password: </label>*/}
            {/*                                <input {...register('password', {required: 'This is a required field.'})}*/}
            {/*                                       type="password"*/}
            {/*                                       name="password" id="password" className="form-control"/>*/}
            {/*                            </div>*/}

            {/*                            /!* Mobile_No *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} htmlFor="mobile" className="form-label">User_Mobile.No*/}
            {/*                                    : </label>*/}
            {/*                                <input {...register('mobile')} type="number" name="mobile" id="mobile"*/}
            {/*                                       className="form-control"/>*/}
            {/*                            </div>*/}

            {/*                            /!* Address *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} data-rule-required="true"*/}
            {/*                                       htmlFor="address">Address</label>*/}
            {/*                                <textarea {...register('address')} name="address" id="address"*/}
            {/*                                          className="form-control"/>*/}
            {/*                            </div>*/}

            {/*                            /!* Photo *!/*/}
            {/*                            <div className="mb-3">*/}
            {/*                                <label style={{color: 'indianred'}} htmlFor="photo">Photo</label>*/}
            {/*                                <input {...register('photo')} type="file" id="photo"*/}
            {/*                                       className="form-control"/>*/}
            {/*                            </div>*/}

            {/*                            <div className="d-grid gap-2 py-4">*/}
            {/*                                <Button type='submit' variant="primary" size="lg">Submit</Button>*/}
            {/*                            </div>*/}
            {/*                        </form>*/}
            {/*                    </div>*/}
            {/*                </Modal.Body>*/}
            {/*                <Modal.Footer>*/}
            {/*                    <Button variant="secondary" onClick={handleClose}>*/}
            {/*                        Close*/}
            {/*                    </Button>*/}
            {/*                    <Button variant="primary" onClick={handleClose}>*/}
            {/*                        Save Changes*/}
            {/*                    </Button>*/}
            {/*                </Modal.Footer>*/}
            {/*            </Modal>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <table className="table table-striped ">*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th></th>*/}
            {/*                <th>Username</th>*/}
            {/*                <th>Email</th>*/}
            {/*                <th>Password</th>*/}
            {/*                <th>Mobile</th>*/}
            {/*                <th>Address</th>*/}
            {/*                <th>Photo</th>*/}
            {/*                <th colSpan={2}>Action</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {*/}
            {/*                user.length === 0 ?*/}
            {/*                <p>error</p>*/}
            {/*                // Swal.fire({*/}
            {/*                //         icon: "error",*/}
            {/*                //         title: "Backend Error..",*/}
            {/*                //         text: "Something went wrong!",*/}
            {/*                //         footer: '<a href="/main_Login">Some Backend Issue....</a>'})*/}
            {/*                :*/}
            {/*                user.map((value) => {*/}
            {/*                let {username, useremail, password, phoneno, address, photo} = value*/}
            {/*                return (*/}
            {/*                    <tr key={useremail}>*/}
            {/*                    <td>{username}</td>*/}
            {/*                    <td>{useremail}</td>*/}
            {/*                    <td>{password}</td>*/}
            {/*                    <td>{phoneno}</td>*/}
            {/*                    <td>{address}</td>*/}
            {/*                    <td><img src={"http://192.168.29.217:9090/" + photo} width={30} height={30}*/}
            {/*                             alt="Error"/></td>*/}
            {/*                    <td>*/}
            {/*                        <button onClick={() => {*/}
            {/*                            deleteData(useremail)*/}
            {/*                        }} type="button" className="btn btn-danger"><FaRegTrashAlt width={50}/></button>*/}
            {/*            */}
            {/*                    </td>*/}
            {/*                    <td>*/}
            {/*                        <button onClick={() => {*/}
            {/*                            navigate('/editSign_up/useremail')*/}
            {/*                        }} type="button" className="btn btn-warning"><GrDocumentUpdate width={50}/>*/}
            {/*                        </button>*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*                }*/}
            {/*                    </tbody>*/}
            {/*                    */}
{/*                </div>*/}
{/*            </div>*/}
{/*        </>*/}

{/*    )*/}
{/*}*/}

{/*export default Sign_Up*/}
