import axios from "axios"
import React, { useState, useEffect } from "react"
// import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import UserNaveBar from "./UserNaveBar.jsx";

const VSign_Up = () => {
    let navigate= useNavigate();
    let [ user, setUser] = useState([]);

    const addStudent = () => {
        axios.post("http://192.168.29.217:9090/allUsers")
            .then((response) => {
                console.log(response.data);
                // console.log(response.data);
                setUser(response.data.ans)
                // console.log(response.data.ans)
            })
    }
    useEffect(() => {
        addStudent();
    }, [])

    const deleteData = (useremail) =>{
        console.log(useremail)
        axios.post("http://192.168.29.217:9090/delUsers?useremail="+useremail)
            .then((response) => {
                console.log(response.data)
                if (response.data === "success"){
                    // alert("1 Row Effected..")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Student Data has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    addStudent();
                }
            }).catch(e => {
            console.log(e)
        })

    }
    return (
        <div className="container">
            <UserNaveBar/>
            <h1 style={{color: "blueviolet"}} className="text-center">𝕍𝕚𝕖𝕨_𝕊𝕚𝕘𝕟_𝕌𝕡</h1>
            <hr/>
            {
                // console.log(user)
                user.length === 0 ?
                    // <p>error</p>
                    Swal.fire({
                        icon: "error",
                        title: "Backend Error..",
                        text: "Something went wrong!",
                        footer: '<a href="/main_Login">Some Backend Issue....</a>'
                    })

                    : <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Photo</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // let {ans} = user;

                            user.map((value) => {
                                // console.log(value)
                                // console(value)
                                let {username, useremail, password, phoneno, address, photo} = value
                                return (
                                    <tr key={useremail}>
                                        <td>{username}</td>
                                        <td>{useremail}</td>
                                        <td>{password}</td>
                                        <td>{phoneno}</td>
                                        <td>{address}</td>
                                        <td><img src={"http://192.168.29.217:9090/" + photo} width={30} height={30}
                                                 alt="Error"/></td>
                                        <td>
                                            <button onClick={() => {
                                                deleteData(useremail)
                                            }} type="button" className="btn btn-danger"><FaRegTrashAlt width={50}/></button>

                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                navigate('/editSign_up/useremail')
                                            }} type="button" className="btn btn-warning"><GrDocumentUpdate width={50}/>
                                            </button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                        </tbody>
                    </table>
            }

        </div>
    )
}
export default VSign_Up