chrome.runtime.onInstalled.addListener(() => {
    console.log('installed!');
});

addEventListener('activate', () => {
    console.log('activated!');
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
        console.log(message);
        sendResponse({ message: 'Received response from background service worker!' });
    });
});