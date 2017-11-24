function isSMMS() {
    return window.location.origin === 'https://sm.ms';
}

function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

if(isSMMS()) {
    injectScript(chrome.extension.getURL('app.js'), 'body');
    console.log('injected');
}