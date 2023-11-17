chrome.runtime.onInstalled.addListener(() => {
    console.log('installed!');
});

addEventListener('activate', () => {
    console.log('activated!');
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log(message);
        sendResponse();
    });
});