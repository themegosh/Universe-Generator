import React, { Component } from "react";
import "./Planet.scss";
import ReactSVG from "react-svg";

class Planet extends Component {
    render() {
        let planet = this.props.planet;
        let planetSize = {
            width: `${planet.diameter / 1000}vw`,
            height: `${planet.diameter / 1000}vw`,
            transform: `rotate(${planet.rotation}deg)`
            //filter: `drop-shadow(0px 0px 10px ${planet.atmosphereColor})`
        };
        return (
            <div className="planet-wrapper" style={planetSize}>
                <div className="outer-layer-wrapper">
                    {planet.outerLayers.map((layer, index) => {
                        let outerLayerStyle = {
                            fill: layer.color,
                            animationDuration: layer.duration
                        };
                        return (
                            <ReactSVG
                                src={layer.image}
                                className={`outer-layer layer-${index}`}
                                style={outerLayerStyle}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div className="outer-glow-wrapper">
                    {planet.outerGlows.map((glow, index) => {
                        let glowStyle = {
                            color: glow
                        };
                        return <div className={`outer-glow glow-${index}`} key={index} style={glowStyle} />;
                    })}
                    <div className="inner-layer-wrapper">
                        {planet.innerLayers.map((layer, index) => {
                            let innerLayerStyle = {
                                fill: layer.color,
                                animationDuration: layer.duration,
                                zIndex: index
                            };
                            return (
                                <ReactSVG
                                    src={layer.image}
                                    className={`inner-layer layer-${index}`}
                                    key={index}
                                    style={innerLayerStyle}
                                />
                            );
                        })}
                    </div>
                    {/* <div className="gradient third surface-wrapper" style={planetStyle}>
                        <div className="surface">
                            {planet.innerLayer.map((surface, index) => {
                                let svgStyle = {
                                    fill: surface.color,
                                    zIndex: index
                                };
                                return (
                                    <ReactSVG
                                        className={`level-${index}`}
                                        src={surface.image}
                                        style={svgStyle}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Planet;
