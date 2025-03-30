# Freedium Redirect Extension

A simple browser extension that redirects the current page to Freedium when you click a button in the extension popup. Compatible with Chrome, Firefox, Edge, and other modern browsers.

## Features

- **Quick Redirect**: Instantly redirect any webpage to `https://www.freedium.cfd/<current-url>`.
- **Cross-Browser Support**: Works seamlessly on browsers supporting the WebExtension API.
- **User-Friendly Interface**: Minimalist design with a straightforward button for redirection.

## Installation

### Step 1: Download the Extension Files

Create a new folder on your computer and place the following files inside:

- `manifest.json`
- `popup.html`
- `popup.js`

### Step 2: Install the Extension in Your Browser

#### For Chrome and Edge

1. **Open the Extensions Page**

   - Navigate to `chrome://extensions/` in the address bar.

2. **Enable Developer Mode**

   - Toggle the **Developer mode** switch located in the upper-right corner.

3. **Load the Extension**

   - Click on **Load unpacked**.
   - Select the folder containing your extension files.

#### For Firefox

1. **Open the Debugging Page**

   - Navigate to `about:debugging#/runtime/this-firefox` in the address bar.

2. **Load Temporary Add-on**

   - Click on **Load Temporary Add-on**.
   - Select the `manifest.json` file from your extension folder.

   _Note: In Firefox, the extension will be disabled when the browser is restarted. For permanent installation, you need to sign the extension._

## Usage

1. **Navigate to Any Website**

   - Open the webpage you wish to redirect through Freedium.

2. **Click the Extension Icon**

   - Find the extension icon in your browser's toolbar and click it.

3. **Redirect to Freedium**

   - In the popup window, click the **"Redirect to Freedium"** button.
   - A new tab will open with the URL `https://www.freedium.cfd/<current-url>`.

## Project Structure

```
/freedium-redirect-extension
├── manifest.json
├── popup.html
├── popup.js
```

- **`manifest.json`**: Defines the extension's metadata and permissions.
- **`popup.html`**: The HTML structure for the popup displayed when the extension icon is clicked.
- **`popup.js`**: Contains the JavaScript code handling the redirection logic.

## Permissions

The extension requires the following permissions specified in `manifest.json`:

- **`tabs`**: To interact with the browser's tab system.
- **`activeTab`**: To access the URL of the currently active tab.

## Contribution

Contributions are welcome! If you have ideas for improvements, feel free to create a fork or submit a pull request.

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- **Freedium Team**: For providing the platform that inspired this extension.
- **WebExtension API Documentation**: Helpful resources for cross-browser extension development.

