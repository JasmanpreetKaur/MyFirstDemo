import Carousel from 'react-bootstrap/Carousel';
import img from "../components/img.jpeg"
import img_1 from "../components/img3.jpg"
import img_2 from "../components/img.jpeg"
function DarkVariantExample() {
    return (
        <div className="container-fluid mt-0 ">
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img_1}
                    alt="First slide"
                    width="50%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h5>First slide </h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                    width="50%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h5>Second slide </h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img_1}
                    alt="Third slide"
                    width="50%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h5>Third slide</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div>
    );
}

export default DarkVariantExample;