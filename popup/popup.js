document.getElementById("delete-messages").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: bulkDeleteMessages
        });
    });
});

function bulkDeleteMessages() {
    alert("This will trigger the delete action. Please ensure you're on Messenger.");
}
