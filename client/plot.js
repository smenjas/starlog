export default class Plot {
    constructor(settings) {
        this.description = 'Stars go here.';
    }

    render() {
        let html = '';
        html += `<p>${this.description}</p>`;
        return html;
    }
}
