var port = chrome.runtime.connect({name: "test"});
port.onMessage.addListener(function(message) {
    console.log(message);
    alert(message.message);
});
port.postMessage({greeting: "hello"});