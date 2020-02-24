class User {
    constructor() {
        this.upDateUser();
        this.aviliteNewUserButton();
    }
    upDateUser() {
        const $form = document.getElementById('form');
        const $profile_name = document.getElementById('profile_name');
        const $profile_weight = document.getElementById('profile_weight');

        $form.style.display = 'flex';

        $form.addEventListener('submit', () => {
            event.preventDefault();

            let $FormData = new FormData($form);

            this.name = $FormData.get('user');
            this.weight = $FormData.get('weight');

            $form.style.display = 'none';

            $profile_name.textContent = `Nombre: ${this.name}`;
            $profile_weight.textContent = `Peso: ${this.weight}kg`;
            return (this.name, this.weight)
        })
    }
    aviliteNewUserButton() {
        const $NewUserButton = document.getElementById('ButtonNewUser');
        $NewUserButton.onclick = this.upDateUser;
    }
}
export default User; 