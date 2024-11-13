# ChatGPT Folder Wizard

A Chrome extension that adds a sidebar to the ChatGPT interface, enabling users to organize conversations, save custom prompts, and manage folders directly within ChatGPT.

## Folder Structure

The project structure is organized as follows:

```
ChatGPTFolderWizard/
├── icons/                      # Folder for extension icons of various sizes
│   ├── icon16.png              # 16x16 icon
│   ├── icon48.png              # 48x48 icon
│   └── icon128.png             # 128x128 icon
├── manifest.json               # Configuration file for Chrome extension
├── content.js                  # JavaScript code injected into ChatGPT for sidebar functionality
├── sidebar.css                 # Styles for the sidebar interface
└── README.md                   # Documentation file (this file)
```

- **manifest.json**: Defines the permissions, content scripts, and basic metadata required for the extension.
- **content.js**: Handles the logic for injecting the sidebar into ChatGPT and managing folder, prompt, and conversation functionalities.
- **sidebar.css**: Provides styling for the sidebar so it integrates visually with ChatGPT's UI.
- **icons/**: Contains icon images in different sizes for the extension.

## Installation Instructions

1. **Download the Extension Code**:
   - Download or clone the repository to your computer.

2. **Open Chrome Extensions Page**:
   - Open Chrome and go to `chrome://extensions/` in the address bar.

3. **Enable Developer Mode**:
   - In the top-right corner of the Extensions page, enable **Developer mode** by toggling it on.

4. **Load Unpacked Extension**:
   - Click on **Load unpacked** and select the folder where this project is located (`ChatGPTFolderWizard`).
   - Chrome will now load the extension and display it in your list of extensions.

5. **Using the Extension**:
   - Open [ChatGPT](https://chat.openai.com) in a new tab.
   - The sidebar should appear on the right side of the ChatGPT interface, allowing you to create folders, save prompts, and organize conversations.

## Key Features

- **Folder Management**:
  - Create, view, and manage folders directly within the ChatGPT interface.
  
- **Prompt Management**:
  - Save frequently used prompts and access them quickly in the sidebar.

- **Conversation Saving**:
  - Save ChatGPT conversations to specific folders for easy access and organization.

---

This README file should provide all the information necessary for someone to understand the folder structure, install the extension, and start using it in Chrome.
