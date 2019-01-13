import React, { Component } from "react";
import "./Star.scss";
import ReactSVG from "react-svg";

class Star extends Component {
    render() {
        let star = this.props.star;
        var starImgStyle = {
            width: `${star.diameter}vw`,
            filter: `drop-shadow(0px 0px 100px ${star.outerGlow10010})`
        };

        return (
            <div className="star-wrapper">
                <div className="star-name">
                    <ReactSVG src={star.image} className={`image`} style={starImgStyle} />
                </div>
            </div>
        );
    }
}

export default Star;
