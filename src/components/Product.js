import React from 'react'
import {Card} from "react-bootstrap";
import Rating from "./Rating";

function Product(props){
    return (
        <div>
            <Card className="m-3 p-3 rounded">
                <a href={`/product/${props.product._id}`}>
                    <Card.Img src={props.product.image} variant="top" >
                    </Card.Img>
                </a>
            
            <Card.Body>
                    <Card.Title as='div'>
                        <strong>
                            {props.product.name}
                        </strong>
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
                $ {props.product.price}
            </Card.Text>
            </Card>
        </div>
    )
}

export default Product;
