import React from 'react'

function Rating(props) {
    return (
        <div>
            <span>
                <i style={{ color:props.colour}} className={props.rating >= 1
                    ? "fas fa-star" 
                    : props.rating >= 0.5
                    ?"fas fa-star-half-alt"
                    :"far fa-star"} ></i>
        </span>
            <span>
                <i style={{ color: props.colour }} className={props.rating >= 2
                    ? "fas fa-star"
                    : props.rating >= 1.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{ color: props.colour }} className={props.rating >= 3
                    ? "fas fa-star"
                    : props.rating >= 2.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{ color: props.colour }} className={props.rating >= 4
                    ? "fas fa-star"
                    : props.rating >=3.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"} ></i>
            </span>
            <span>
                <i style={{ color: props.colour }} className={props.rating >= 5
                    ? "fas fa-star"
                    : props.rating >= 4.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"} ></i>
            </span>
            <span class="rating-text">
                {props.text ? props.text : "no reviews"}
            </span>
        </div >
    )
}
Rating.defaultProps={
    colour:"#FFF338"
}

export default Rating;
