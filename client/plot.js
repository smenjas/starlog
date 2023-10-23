export default class Plot {
    constructor() {
        this.description = 'Stars go here.';
    }

    render() {
        let html = '';
        html += `<p>${this.description}</p>`;
        return html;
    }
}
