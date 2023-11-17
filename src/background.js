chrome.runtime.onInstalled.addListener(() => {
    console.log('installed!');
});

addEventListener('activate', () => {
    console.log('activated!');
});

chrome.runtime.onConnect.addListener(function(port) {
    console.log('connected!');
    port.onMessage.addListener(function(message) {
        console.log(message);
        port.postMessage({message: 'Received response from background service worker!'});
    });
});