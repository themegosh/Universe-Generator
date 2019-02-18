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

    generatePlanet(aStar) {
        let aPlanet = AllPlanets[Math.floor(Math.random() * AllPlanets.length)];
        console.log(aStar.diameter);
        return {
            name: aPlanet.name,
            surfaceImage: this.getImgPath("Planets", aPlanet.surfaceImage),
            innerGlows: aPlanet.innerGlows.slice(),
            innerLayers: aPlanet.innerLayers.map(layer => {
                return {
                    image: this.getImgPath("InnerLayers", layer.image),
                    color: layer.color,
                    duration: layer.duration,
                    width: layer.width
                };
            }),
            outerGlows: aPlanet.outerGlows.slice(),
            outerLayers: aPlanet.outerLayers.map(layer => {
                return {
                    image: this.getImgPath("OuterLayers", layer.image),
                    color: layer.color,
                    duration: layer.duration,
                    width: layer.width
                };
            }),
            atmosphere: AllAtmospheres[Math.floor(Math.random() * (AllAtmospheres.length - 1))],
            year: Math.floor(Math.random() * (40 - 1) + aStar.diameter),
            days: Math.floor(Math.random() * (50 - 1) + 15),
            gravity: Math.ceil(Math.floor(Math.random() * (100 - 1) + 1) / 10) * 10,
            mass: Math.ceil(Math.floor(Math.random() * (400 - 1) + 1) / 10) * 10,
            diameter: Math.ceil(Math.floor(Math.random() * 5000) + 3000),
            rotation: Math.ceil(Math.floor(Math.random() * (0 - 25) + 0))
        };
    }

    generateStar() {
        var aStar = AllStars[Math.floor(Math.random() * AllStars.length)];

        aStar.diameter = Math.ceil(Math.floor(Math.random() * 20) + 20);
        aStar.image = this.getImgPath("Stars", aStar.images[Math.floor(Math.random() * (aStar.images.length - 1))]);

        //generate the planets
        aStar.planets = [];
        for (var i = 0; i < Math.floor(Math.random() * 6) + 3; i++) {
            aStar.planets.push(this.generatePlanet(aStar));
        }

        //sort them by 'year'
        aStar.planets = aStar.planets.sort((a, b) => b.year - a.year);

        //console.log("afterPlanets", planets);

        return aStar;
    }

    generateSolarSystem() {
        let solarSystem = this.generateStar();
        console.log("solarSystem", solarSystem);
        return solarSystem;
    }
}
