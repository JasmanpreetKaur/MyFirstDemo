import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react"
import { FaRegTrashAlt } from "react-icons/fa";
import UserNaveBar from "./UserNaveBar.jsx";

const Add_City = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();

    //Add_City
    const onSubmit = (data) => {
        console.log(data);
        console.log(data.photo[0])

        let data1= new FormData();
        data1.append("cityname",data.cityname)
        data1.append("photo",data.photo)
        data1.append("desc",data.descr)///adminShowCities
        axios.post("http://192.168.29.217:9090/adminAddCities",data1)
            .then((response) => {
                console.log(response);
                if (response.data === 'success'){
                    reset();
                    Swal.fire("City Has been Added... ");
                    viewCity();

                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!"
                    });
                }

            })
    };

    //View_City

    const viewCity = ()=>{
        axios.post("http://192.168.29.217:9090/adminShowCities")
            .then((response) =>{
                console.log(response.data)
                setCity(response.data.ans)
            })
    }

    let[city,setCity] = useState([]);
    useEffect(()=>{
        viewCity();
    },[])

    // Delete_City
    const deleteCity = (cityname) =>{
        console.log(cityname)
        axios.post("http://192.168.29.217:9090/adminDeleteCities?cityname="+cityname)
            .then((response) => {
                console.log(response.data)
                if (response.data === "success"){
                    // alert("1 Row Effected..")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "City Data has been Deleted..",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    viewCity();
                }
            }).catch(e => {
            console.log(e)
        })
    }


    return (
        <>
            <div className="container-fluid">
                <UserNaveBar/>
                <div className="col-md-8 offset-md-2 ">

                    <h1 style={{ color: "blueviolet" }} className="text-center">𝔸𝕕𝕕_ℂ𝕚𝕥𝕪</h1>
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container mb-3">
                            <label style={{color: "darkgreen", fontStyle: "20px"}}  className="form-label">Enter City_Name:</label>
                            <input {...register("cityname", { required: 'This is a required field.' })} type="text" id="cityname" name="cityname" className="form-control mt-3" />
                            <ErrorMessage errors={errors} name="cityname" render={({ message }) => <p className='text-danger'>{message}</p>} />
                        </div>
                        <div className="container mb-3">
                            <label style={{color: "darkgreen", fontStyle: "20px"}}  className="form-label">Select the Photo:</label>
                            <input {...register("photo", { required: 'This is a required field.' })} type="file" id="photo" className="form-control mt-3" />
                            <ErrorMessage errors={errors} name="photo" render={({ message }) => <p className='text-danger'>{message}</p>} />
                        </div>
                        <div className="container mb-3">
                            <label style={{color: "darkgreen", fontStyle: "20px"}}  className="form-label">City_Description:</label>
                            <input {...register("descr")} type="text" id="descr" name="descr" className="form-control mt-3" />
                        </div>
                        <br />
                        <div className="container d-grid gap-2">
                            <Button variant="outline-info" size="lg" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                <br/><br/>
                <hr/>
                <div className="col-md-8 offset-md-2 ">
                    <h1 style={{color: "blueviolet"}} className="text-center">𝕍𝕚𝕖𝕨_ℂ𝕚𝕥𝕪</h1>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th>City_Name</th>
                            <th>Photo</th>
                            <th>City_Desc</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // console.log(city)
                            city.map((value)=>{
                                let { cityname, photo, desc } = value
                                return (
                                    <tr key={cityname}>
                                        <td>{cityname}</td>
                                        <td><img src={"http://192.168.29.217:9090/" + photo} width={50} height={50}
                                                 alt="Error"/></td>
                                        <td>{desc}</td>
                                        <td>
                                            <button onClick={()=>{deleteCity(cityname)}} type="button" className="btn btn-danger"><FaRegTrashAlt width={50}/></button>
                                        </td>
                                        {/*<td><button onClick={()=>{navigate('/editSign_up/useremail')}} type="button" className="btn btn-warning"><GrDocumentUpdate  width={50}/></button></td>*/}
                                    </tr>
                                )
                            })

                        }
                        </tbody>
                    </table>
                    <br/>
                    <hr/>
                </div>
            </div>
        </>
    );
};

export default Add_City;


//npm install react-icons --save ----(for react-icon)
