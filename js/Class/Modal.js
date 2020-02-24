class Modal {
    constructor() {
        if (Modal.instance === 'object') {
            return Modal.instance
        }
        this.$modal = document.querySelector('#modal');
        this.$modalButton = this.$modal.querySelector('#modal-button')
        this.$modalButton.onclick = () => {
            this.$modal.classList.remove('show')
            document.removeEventListener('keyup', () => { this.hiddenModal() })
        }
        Modal.instance = this;
        return this
    }
    showModal(string) {
        this.$modal.classList.add("show")
        this.$modal.querySelector('p').innerHTML = string;
        document.addEventListener('keyup', (event) => { this.hiddenModal(event) })
    }
    hiddenModal(event) {
        if (event.key === "Enter") {
            this.$modal.classList.remove('show')
            document.removeEventListener('keyup', this.hiddenModal)
        }
    }
}
export default new Modal;