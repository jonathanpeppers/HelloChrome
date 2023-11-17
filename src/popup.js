async function start() {
    try {
        const response = await chrome.runtime.sendMessage({greeting: "hello"});
        console.log(response);
        alert(response.message);
    } catch (error) {
        alert(error);
    }
}

start();