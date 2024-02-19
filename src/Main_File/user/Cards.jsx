import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mobile from "../components/mobile.jpeg"
import mobile1 from "../components/m1.jpeg"
export default function  Cards(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={mobile}/>
                            <Card.Body>
                                <Card.Title style={{color: "blue"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses. It is also a decent
                                    option for those who prioritise battery and performance..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-3">
                        <Card style={{width: '18.5rem', marginTop:"20px"}}>
                            <Card.Img variant="top" src={mobile1} />
                            <Card.Body>
                                <Card.Title style={{color: "orange"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses. It is also a decent
                                    option for those who prioritise battery and performance..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={mobile}/>
                            <Card.Body>
                                <Card.Title style={{color: "blue"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses. It is also a decent
                                    option for those who prioritise battery and performance..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-3">
                        <Card style={{width: '18.5rem', marginTop:"20px"}}>
                            <Card.Img variant="top" src={mobile1}/>
                            <Card.Body>
                                <Card.Title style={{color: "orange"}}>Xiaomi Redmi 13C 5Ge</Card.Title>
                                <Card.Text>
                                    The Redmi 13C 5G deserves credit for expanding 5G to the masses. It is also a decent
                                    option for those who prioritise battery and performance..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

