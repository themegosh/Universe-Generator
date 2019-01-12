import React, { Component } from "react";
import "./FancyButton.scss";

class FancyButton extends Component {
    render() {
        return (
            <button type="button" className="fancy-button" onClick={this.props.onClick} disabled={this.props.disabled}>
                {this.props.children}
            </button>
        );
    }
}

export default FancyButton;
