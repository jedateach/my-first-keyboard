// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let mainDiv = document.getElementById("main-output")

window.addEventListener('keyup', function (event) {
    let key = event.key;
    let rgx = new RegExp('^[a-zA-Z0-9]', 'g');
    if(rgx.test(key) && key.length === 1) {
        mainDiv.innerHTML = key;
    }
}, true);

