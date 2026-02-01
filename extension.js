const vscode = require("vscode");

const CONFIG_NAME = "Connect to Air Debugger";
const RECONNECT_DELAY_MS = 2000;

function activate(context) {
    let reconnectTimeout = null;

    const disposable = vscode.debug.onDidTerminateDebugSession((session) => {
        const name = session?.configuration?.name;
        if (name !== CONFIG_NAME) return;
        if (reconnectTimeout) clearTimeout(reconnectTimeout);
        reconnectTimeout = setTimeout(() => {
            reconnectTimeout = null;
            const folder = vscode.workspace.workspaceFolders?.[0];
            vscode.debug.startDebugging(folder, CONFIG_NAME);
        }, RECONNECT_DELAY_MS);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
