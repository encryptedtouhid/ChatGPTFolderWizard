// Ensure the script runs after the page content is fully loaded
window.addEventListener("load", () => {
    // Check if the sidebar is already injected to avoid duplicates
    if (!document.getElementById("chatgpt-custom-sidebar")) {
        // Create and append the sidebar element
        const sidebar = document.createElement("div");
        sidebar.id = "chatgpt-custom-sidebar";
        sidebar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      background-color: #f9f9f9;
      border-left: 1px solid #ccc;
      padding: 15px;
      z-index: 10000;
      overflow-y: auto;
    `;

        // Sidebar content
        sidebar.innerHTML = `
      <h3>ChatGPT Organizer</h3>
      <button id="create-folder">+ Create Folder</button>
      <ul class="folder-list" id="folders-list"></ul>
      <button id="save-prompt">+ Save Prompt</button>
      <ul class="prompt-list" id="prompts-list"></ul>
    `;

        // Append sidebar to the body
        document.body.appendChild(sidebar);

        // Load folders and prompts from storage
        displayFolders();
        displayPrompts();

        // Event listener for creating folders
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

        // Event listener for saving a prompt
        document.getElementById("save-prompt").addEventListener("click", () => {
            const promptText = prompt("Enter prompt text:");
            if (promptText) {
                chrome.storage.local.get({ prompts: [] }, (data) => {
                    const prompts = data.prompts;
                    prompts.push(promptText);
                    chrome.storage.local.set({ prompts });
                    displayPrompts();
                });
            }
        });

        // Display saved folders
        function displayFolders() {
            chrome.storage.local.get({ folders: [] }, (data) => {
                const folderList = document.getElementById("folders-list");
                folderList.innerHTML = "";
                data.folders.forEach((folder, index) => {
                    const li = document.createElement("li");
                    li.textContent = folder.name;
                    li.className = "item";
                    li.addEventListener("click", () => openFolder(index));
                    folderList.appendChild(li);
                });
            });
        }

        // Display saved prompts
        function displayPrompts() {
            chrome.storage.local.get({ prompts: [] }, (data) => {
                const promptList = document.getElementById("prompts-list");
                promptList.innerHTML = "";
                data.prompts.forEach((prompt) => {
                    const li = document.createElement("li");
                    li.textContent = prompt;
                    li.className = "item";
                    promptList.appendChild(li);
                });
            });
        }

        // Open a folder to view conversations
        function openFolder(folderIndex) {
            chrome.storage.local.get("folders", (data) => {
                const folder = data.folders[folderIndex];
                alert(`Folder: ${folder.name}\nConversations: ${folder.conversations.length}`);
            });
        }
    } // End of if statement for sidebar check
}); // End of load event listener
