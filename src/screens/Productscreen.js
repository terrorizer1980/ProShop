import React,{useState,useEffect,useParams} from 'react'
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Axios from "axios";

function Productscreen(props) {
    // here we can also use match props as there is props.match.params.id 
    const [product,setProduct]=useState({});

    useEffect(()=>{
        Axios.get(`/api/products/${props.match.params.id}`).then((response)=>{
            setProduct(response.data);
        });
    },[product]);
    
    return (
        <div>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid ></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush" >
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                rating={product.rating}
                                text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            About : {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Status : {product.countInStock<0 ? "Out of Stock😢":"In Stock😋"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/cart">
                                <div className="d-grid">
                                <Button variant="dark">
                                    Add to Cart
                                </Button>
                                </div>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default Productscreen;
