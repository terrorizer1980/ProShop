import React from 'react'
import {Card} from "react-bootstrap";
import Rating from "./Rating";
import {Link} from "react-router-dom";

function Product(props){
    return (
        <div>
            <Card className="m-3 p-3 rounded">
                <Link to={`/product/${props.product._id}`}>
                    <Card.Img src={props.product.image} variant="top" >
                    </Card.Img>
                </Link>
            
            <Card.Body>
                    <Card.Title as='div'>
                        <Link to={`/product/${props.product._id}`}>
                        <strong>
                            {props.product.name}
                        </strong>
                        </Link>
                    </Card.Title>
            </Card.Body>
            <Card.Text as="div">
                    <Card.Title className="ms-3">
                        {/* /* {props.product.rating} out of {props.product.numReviews} reviews */ }
                        <Rating 
                        rating={props.product.rating}
                        text={`${props.product.numReviews} reviews`}
                        colour="#FFF338"
                        />
                    </Card.Title>
            </Card.Text>
            <Card.Text as="h3" className="ms-2">
                <Link to={`/product/${props.product._id}`}>
                $ {props.product.price}
                    </Link>
            </Card.Text>
            </Card>
        </div>
    )
}

export default Product;
