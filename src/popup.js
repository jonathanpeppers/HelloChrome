try {
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        console.log(response);
    });
} catch (error) {
    alert(error);
}