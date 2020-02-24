import Planet from './Class/Planet.js';
import User from './Class/User.js';

//------------------------------------User-----------------------------------------//

let user = new User;

//-----------------------------------Planets-------------------------------------------//

const Planets = [
    new Planet('Mercurio', 3.7, 'mercurio'),
    new Planet('Venus', 8.8, 'venus'),
    new Planet('Tierra', 9.8, 'tierra'),
    new Planet('Luna', 1.6, 'luna'),
    new Planet('Marte', 3.7, 'marte'),
    new Planet('Jupiter', 24.7, 'jupiter'),
    new Planet('Saturno', 10.4, 'saturno'),
    new Planet('Urano', 8.8, 'urano'),
    new Planet('Neptuno', 11.1, 'neptuno')
]

Planets.forEach(planet => {
    planet.activatePlanet(user);
})