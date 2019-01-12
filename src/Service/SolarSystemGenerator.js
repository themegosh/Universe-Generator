import AllStars from "./../Data/Stars.json";
import AllPlanets from "./../Data/Planets.json";
import AllAtmospheres from "./../Data/Atmospheres.json";

export default class SolarSystemGenerator {
    constructor() {
        const reqSvgs = require.context("./../Images", true, /\.svg$/);
        this.svgPaths = reqSvgs.keys();
        this.realSvgPaths = this.svgPaths.map(path => reqSvgs(path));
    }

    getImgPath(type, name) {
        //console.log("getImgPath", type, name);
        var key;
        for (key in this.svgPaths) {
            if (this.svgPaths[key].indexOf(`/${type}/${name}`) > -1) {
                return this.realSvgPaths[key];
            }
        }
        return null;
    }

    generatePlanet() {
        var aPlanet = AllPlanets[Math.floor(Math.random() * (AllPlanets.length - 1))];

        //console.log("aPlanet", aPlanet);

        return {
            name: aPlanet.name,
            atmosphereColor: aPlanet.atmosphereColor,
            atmosphere: AllAtmospheres[Math.floor(Math.random() * (AllAtmospheres.length - 1))],
            year: Math.floor(Math.random() * (10 - 1) + 60),
            days: Math.floor(Math.random() * (50 - 1) + 15),
            image: this.getImgPath("Planets", aPlanet.images[Math.floor(Math.random() * (aPlanet.images.length - 1))]),
            gravity: Math.ceil(Math.floor(Math.random() * (100 - 1) + 1) / 10) * 10,
            mass: Math.ceil(Math.floor(Math.random() * (400 - 1) + 1) / 10) * 10,
            diameter: Math.ceil(Math.floor(Math.random() * (100 - 1) + 1) / 10) * 10,
            rotation: Math.ceil(Math.floor(Math.random() * (0 - 25) + 0))
        };
    }

    generateStar() {
        var aStar = AllStars[Math.floor(Math.random() * (AllStars.length - 1))];

        var planets = [];

        for (var i = 0; i < 5; i++) {
            planets.push(this.generatePlanet());
        }

        //console.log("afterPlanets", planets);

        return {
            name: aStar.name,
            planets: planets,
            image: this.getImgPath("Stars", aStar.images[Math.floor(Math.random() * (aStar.images.length - 1))]),
            diameter: Math.ceil(Math.floor(Math.random() * (100 - 1) + 1) / 10) * 20
        };
    }

    generateSolarSystem() {
        return this.generateStar();
    }
}
