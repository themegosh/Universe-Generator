import React, { Component } from "react";
import Planet from "./../Planet/Planet";
import "./Star.scss";

class Star extends Component {
    render() {
        let star = this.props.star;
        var starImgStyle = {
            width: `${star.diameter * 0.25 }em`
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
