# Air Debug Reconnect

Re-attaches to **Connect to Air Debugger** when the debug session ends (e.g. after Air rebuilds on save). For Go projects using [Air](https://github.com/air-verse/air) hot-reload with Delve, this keeps the debugger connected across restarts.

## Features

- Listens for termination of the debug session named **Connect to Air Debugger**
- Automatically starts the same debug configuration again after a short delay (2 seconds)
- No manual re-attach after save/rebuild; ideal for Air + Delve workflows

## Requirements

- VS Code 1.70.0 or higher
- A launch configuration named exactly **Connect to Air Debugger** that attaches to a running process (e.g. Air/Delve)

## Installation

### From VSIX (after publishing)

1. Download the `.vsix` from the marketplace or releases
2. **Ctrl+Shift+P** → **Extensions: Install from VSIX**
3. Select the downloaded file and reload when prompted

### From folder (development)

1. **Ctrl+Shift+P** → **Developer: Install Extension from Location**
2. Select this extension folder
3. Reload the window when prompted

## Usage

1. Add a launch configuration named **Connect to Air Debugger** in `.vscode/launch.json`, for example:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Connect to Air Debugger",
      "type": "go",
      "request": "attach",
      "mode": "remote",
      "remotePath": "${workspaceFolder}",
      "port": 2345
    }
  ]
}
```

2. Start your app with Air (e.g. `air` or your project’s Air config) so the process listens for Delve on the configured port
3. Start debugging via **Run and Debug** and choose **Connect to Air Debugger**
4. When you save a file and Air restarts the process, the debugger will detach; this extension will start **Connect to Air Debugger** again after ~2 seconds

No extra configuration is required; the extension activates on startup and only reacts to the session named **Connect to Air Debugger**.

## Example project

A Go Clean Architecture project using Air and this attach workflow:

**[beetool.dev-go-starter](https://github.com/dukk308/beetool.dev-go-starter)** — [https://github.com/dukk308/beetool.dev-go-starter](https://github.com/dukk308/beetool.dev-go-starter)

Clone it and use the **Connect to Air Debugger** launch config with Air for a ready-made setup.

## License

MIT
