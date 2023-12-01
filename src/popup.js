var port = chrome.runtime.connect({name: "popup"});
port.onMessage.addListener(function(message) {
    console.log(message);
    alert(message.message);
});
port.postMessage({greeting: "hello"});