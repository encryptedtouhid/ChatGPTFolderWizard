document.getElementById("create-folder").addEventListener("click", () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
        chrome.storage.local.get({ folders: [] }, (data) => {
            const folders = data.folders;
            folders.push({ name: folderName, conversations: [] });
            chrome.storage.local.set({ folders });
            displayFolders();
        });
    }
});

document.getElementById("save-prompt").addEventListener("click", () => {
    const promptText = prompt("Enter your prompt:");
    if (promptText) {
        chrome.storage.local.get({ prompts: [] }, (data) => {
            const prompts = data.prompts;
            prompts.push(promptText);
            chrome.storage.local.set({ prompts });
            displayPrompts();
        });
    }
});

function displayFolders() {
    chrome.storage.local.get({ folders: [] }, (data) => {
        const folderList = document.getElementById("folders-list");
        folderList.innerHTML = "";
        data.folders.forEach((folder, index) => {
            const li = document.createElement("li");
            li.textContent = folder.name;
            li.addEventListener("click", () => openFolder(index));
            folderList.appendChild(li);
        });
    });
}

function displayPrompts() {
    chrome.storage.local.get({ prompts: [] }, (data) => {
        const promptList = document.getElementById("prompts-list");
        promptList.innerHTML = "";
        data.prompts.forEach((prompt) => {
            const li = document.createElement("li");
            li.textContent = prompt;
            promptList.appendChild(li);
        });
    });
}

function openFolder(folderIndex) {
    chrome.storage.local.get("folders", (data) => {
        const folder = data.folders[folderIndex];
        alert(`Folder: ${folder.name}\nConversations: ${folder.conversations.length}`);
    });
}

// Load folders and prompts on sidebar load
document.addEventListener("DOMContentLoaded", () => {
    displayFolders();
    displayPrompts();
});
