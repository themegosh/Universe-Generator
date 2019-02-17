import React, { Component } from "react";
import "./Planet.scss";
import ReactSVG from "react-svg";

class Planet extends Component {
    render() {
        const { planet } = this.props;
        const planetStyle = {
            width: `${planet.diameter / 1000}em`,
            height: `${planet.diameter / 1000}em`,
            transform: `rotate(-${planet.degrees}deg)`
            //filter: `drop-shadow(0px 0px 10px ${planet.atmosphereColor})`
        };

        return (
            <div className="planet" style={planetStyle}>
                <div className="outer-layer-wrapper">
                    {planet.outerLayers.map((layer, index) => {
                        let outerLayerStyle = { fill: layer.color, animationDuration: layer.duration };
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
                        let glowMultiplier = (index + 1) * 5 + 10;
                        let glowStyle = { filter: `drop-shadow(0px 0px ${glowMultiplier}px ${glow})` };
                        return <div className={`outer-glow glow-${index}`} key={index} style={glowStyle} />;
                    })}
                </div>
                <div className="surface-wrapper">
                    <ReactSVG src={planet.surfaceImage} className="surface-image" />
                    <div className="inner-glow-wrapper">
                        {planet.innerGlows.map((glow, index) => {
                            let innerGlowStyle = { backgroundColor: glow };
                            return <div className="inner-glow" style={innerGlowStyle} key={index} />;
                        })}
                    </div>
                    <div className="inner-layer-wrapper">
                        {planet.innerLayers.map((layer, index) => {
                            let innerLayerStyle = {
                                fill: layer.color,
                                animationDuration: `${layer.duration}s`,
                                zIndex: index,
                                width: layer.width
                            };
                            return [
                                <ReactSVG
                                    src={layer.image}
                                    className={`inner-layer layer-${index}`}
                                    key={`${index}a`}
                                    style={innerLayerStyle}
                                />,
                                <ReactSVG
                                    src={layer.image}
                                    className={`inner-layer layer-${index}-offset`}
                                    key={`${index}b`}
                                    style={innerLayerStyle}
                                />
                            ];
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Planet;
