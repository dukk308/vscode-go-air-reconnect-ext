# Air Debug Reconnect

Re-attaches to **Connect to Air Debugger** when the session ends (e.g. after Air rebuilds on save).

## Install

1. In VS Code: **Ctrl+Shift+P** → **Developer: Install Extension from Location**
2. Select this folder: `vscode-air-reconnect` (repo root)
3. Reload the window when prompted

After that, when you save a file and Air rebuilds, the debugger will re-attach automatically after ~2 seconds.
