import React, { Component } from "react";
import "./Star.scss";

class Star extends Component {
    render() {
        let star = this.props.star;
        var starImgStyle = {
            width: `${star.diameter * 0.25}em`,
            filter: `drop-shadow(0px 0px 100px ${star.outerGlow10010})`,
            filter: `drop-shadow(0px 0px 50px ${star.outerGlow5020})`
        };

        return (
            <div className="star">
                <div className="star-name">
                    <img className="image" src={star.image} alt={star.name} style={starImgStyle} />
                </div>
            </div>
        );
    }
}

export default Star;
