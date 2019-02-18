import React from "react";
import "./Star.scss";
import ReactSVG from "react-svg";

const Star = props => {
    const { star } = props;

    var starImgStyle = {
        width: `${star.diameter}em`
    };

    return (
        <div className="star-wrapper">
            <div className="star">
                <ReactSVG src={star.image} className={`image`} style={starImgStyle} />
            </div>
        </div>
    );
};

export default Star;
