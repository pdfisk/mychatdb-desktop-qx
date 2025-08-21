qx.Class.define("mychatdb.ui.windows.chat_console.widgets.ButtonBar", {
    extend: mychatdb.ui.widgets.ButtonBar,

    members: {

        addButtons() {
            this.addButton("Send", this.onSend);
            this.addButton("Clear In", this.onClearIn);
            this.addButton("Clear Out", this.onClearOut);
        },

        onClearIn() {
            this.getParentWindow().onClearIn();
        },

        onClearOut() {
            this.getParentWindow().onClearOut();
        },

        onSend() {
            this.getParentWindow().onSend();
        }

    }
});
