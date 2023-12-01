console.log('document_start.js loaded!');

document.addEventListener('keypress', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        var port = chrome.runtime.connect({name: "document_start"});
        port.onMessage.addListener(function(message) {
            console.log(message);
            alert(message.message);
        });
        port.postMessage({greeting: "hello"});
    }
});