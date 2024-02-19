import Card from "react-bootstrap/Card";
import mobile from "../Main_File/components/mobile.jpeg";
import {useContext} from "react";
import {MyContext} from "../App.jsx";

export default function ContactPage(){
    let{cart,setCart} =useContext(MyContext);
    return(
        <>
            <div className="container m-3">
                <div className="row">
                    <div className="col-sm-4">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={mobile}/>
                            <Card.Body>
                                <Card.Title style={{color: "blue"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses.
                                </Card.Text>
                                <p>
                                    <del><span>3000</span></del>
                                    1500
                                </p>
                                <button  onClick={()=> setCart(cart+1)} type={"submit"} className={"btn btn-dark"}> Add Cart</button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={mobile}/>
                            <Card.Body>
                                <Card.Title style={{color: "blue"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses.
                                </Card.Text>
                                <p>
                                    <del><span>3000</span></del>
                                    1500
                                </p>
                                <button onClick={()=> setCart(cart+1)} type={"submit"} className={"btn btn-dark"}> Add Cart</button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={mobile}/>
                            <Card.Body>
                                <Card.Title style={{color: "blue"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses.
                                </Card.Text>
                                <p>
                                    <del><span>3000</span></del>
                                    1500
                                </p>
                                <button onClick={()=> setCart(cart+1)} type={"submit"} className={"btn btn-dark"}> Add Cart</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}