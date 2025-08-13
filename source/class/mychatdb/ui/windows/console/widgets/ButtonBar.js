qx.Class.define("mychatdb.ui.windows.console.widgets.ButtonBar", {
    extend: mychatdb.ui.widgets.ButtonBar,

    members: {

        addButtons () {
            this.addButton("Run", this.onRun);
            this.addButton("Clear In", this.onClearIn);
            this.addButton("Clear Out", this.onClearOut);
            this.addButton("Version", this.onVersion);
        },

        onClearIn () {
            this.getParentWindow().onClearIn();
        },

        onClearOut () {
            this.getParentWindow().onClearOut();
        },

        onRun () {
            this.getParentWindow().onRun();
        },

        onVersion() {
            this.getParentWindow().onVersion();
        }

    }
});
