# Default Body Background Firefox Extension

This extension sets the background color of a webpage's body to near-white (`#f9f9f9`) if it is not already set.

## How it works
- Injects a content script into every page.
- If the computed background color of the `<body>` is transparent or unset, it sets it to near-white.

## Installation
1. Go to `about:debugging#/runtime/this-firefox` in Firefox.
2. Click "Load Temporary Add-on..." and select the `manifest.json` file from this folder.

## Development
- `manifest.json`: Extension manifest.
- `content.js`: Script that checks and sets the body background color.

## Uninstallation
- Remove the extension from `about:addons` or restart Firefox.
