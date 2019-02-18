import React, { Component } from "react";
import "./Star.scss";
import ReactSVG from "react-svg";

class Star extends Component {
    render() {
        let star = this.props.star;

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
    }
}

export default Star;
