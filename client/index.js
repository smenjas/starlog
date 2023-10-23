import Plot from './plot.js';
import Settings from './settings.js';

document.title = 'Starlog';
let html = '<div id="container">';
html += '<div id="plot"></div>';
html += '<div id="settings"></div>';
html += '</div>';
document.body.insertAdjacentHTML('beforeend', html);

const settings = new Settings();
const plot = new Plot(settings);

document.getElementById('plot').innerHTML = plot.render();
document.getElementById('settings').innerHTML = settings.render();
