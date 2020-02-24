import Modal from './Modal.js';

class Planet {
    constructor(name, gravity, id) {
        this.name = name;
        this.gravity = gravity;
        this.planetHTMLElement = document.getElementById(id);
    }
    calculate(userWheight) {
        const EarthGravity = 9.8;
        this.userWheight = Number((userWheight *= this.gravity / EarthGravity).toFixed(1));
        return this.userWheight;
    }
    activatePlanet(user) {
        this.planetHTMLElement.addEventListener('click', () => {
            if (this.name === 'Tierra' || this.name === 'Luna') {
                Modal.showModal(`<strong>${user.name}</strong>,Tu peso en la ${this.name} es de <strong>${this.calculate(user.weight)}kg</strong>`)
            } else {
                Modal.showModal(`<strong>${user.name}</strong>,Tu peso en ${this.name} es de <strong>${this.calculate(user.weight)}kg</strong>`)
            }
        })
    }

}

export default Planet