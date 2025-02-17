console.log("Facebook Messages Manager loaded.");

// Function to add a custom button to Messenger UI
function addBulkActionButtons() {
    const toolbar = document.querySelector(".x78zum5"); // Messenger top bar

    if (!toolbar || document.getElementById("bulk-delete-btn")) return;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Bulk Delete";
    deleteButton.id = "bulk-delete-btn";
    deleteButton.style.cssText = "margin-left:10px; padding:5px 10px; background:red; color:white; border:none; cursor:pointer;";

    deleteButton.addEventListener("click", bulkDeleteMessages);

    toolbar.appendChild(deleteButton);
    toolbar.style.cssText = 'display:flex; flex-direction:row'
}

// Function to bulk delete messages
function bulkDeleteMessages() {
    const chatList = document.querySelectorAll('[role="row"]'); // Message rows
    if (chatList.length === 0) {
        alert("No messages found!");
        return;
    }

    chatList.forEach((chat, index) => {
        setTimeout(() => {
            const moreActionsBtn = chat.querySelector('div[aria-label="Menu"]');
            if (moreActionsBtn) {
                moreActionsBtn.click();
                setTimeout(() => {
                    const deleteOption = [...document.querySelectorAll('div[role="menuitem"]')]
                        .find(el => el.textContent.includes("Delete"));
                    if (deleteOption) {
                        deleteOption.click();
                        console.log(`Deleted message ${index + 1}`);
                    }
                }, 500);
            }
        }, index * 1000);
    });

}


// Run script when Messenger loads
setTimeout(addBulkActionButtons, 3000);
