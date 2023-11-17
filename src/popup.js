try {
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        console.log(response);
        alert('Received response from background service worker!');
    });
} catch (error) {
    alert(error);
}