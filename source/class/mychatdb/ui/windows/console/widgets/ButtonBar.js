qx.Class.define("mychatdb.ui.windows.console.widgets.ButtonBar", {
    extend: mychatdb.ui.widgets.ButtonBar,

    members: {

        addButtons() {
            this.addButton("Run", this.onRun);
            this.addButton("Clear In", this.onClearIn);
            this.addButton("Clear Out", this.onClearOut);
            this.addButton("Version", this.onVersion);
            this.addButton("Send", this.onSend);
        },

        onClearIn() {
            this.getParentWindow().onClearIn();
        },

        onClearOut() {
            this.getParentWindow().onClearOut();
        },

        onRun() {
            this.getParentWindow().onRun();
        },

        onSend() {
            console.log('button onSend');
            this.getParentWindow().onSend();
        },

        onVersion() {
            this.getParentWindow().onVersion();
        }

    }
});
