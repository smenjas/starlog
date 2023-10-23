export default class Settings {
    constructor(settings) {
        this.description = 'Settings go here.';
    }

    render() {
        let html = '';
        html += `<p>${this.description}</p>`;
        return html;
    }
}
