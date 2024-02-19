import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import axios from 'axios'
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message';
import img from "../assets/img4.jpeg"

const DemoLogin = () => {
    let {register, handleSubmit , formState: {errors}} = useForm()

    function onSubmit(data) {
        console.log(data)    ;
        // axios.post("http://192.168.29.217:9090/userCheckLogin", data )
        //         .then((response) => {
        //             console.log(response);

        //             if(response.data === "success")
        //             {
        //                 reset();
        //             }

        //         })

    }

    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat:"no-repeat",backgroundSize:"100% 100vh"}} className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit(onSubmit)}>
                                    <h1 style={{color:"#639FAB" ,textAlign: "center"}}>Login</h1>
                                    <p className="text-medium-emphasis">Login to your account</p>


                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput {
                                                        ...register('username', {required: 'This is a required field.'})}
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="username"
                                        />
                                    </CInputGroup>
                                    {errors.username && <p className='text-danger'>This is a required field.</p>}


                                    {/* Email Code */}
                                    {/* <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput {
                    ...register('email', {required: 'This is a required field.'})}
                    placeholder="Email"
                    type="email"
                    autoComplete="email"
                    />
                  </CInputGroup> */}


                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            {...register('password', {required: true})}
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="new-password"
                                        />
                                    </CInputGroup>
                                    {errors.password && <p className='text-danger'>This is a required field.</p>}

                                    {/* Confirm Passowrd */}
                                    {/* <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                    {...register('newPassword', {required: 'This is a required field.'})}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup> */}

                                    <div className="d-grid">
                                        <CButton type='submit' color="success">Create Account</CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default DemoLogin