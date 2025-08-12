qx.Class.define("mychatdb.ui.windows.console.widgets.ButtonBar", {
    extend: mychatdb.ui.widgets.ButtonBar,

    members: {

        addButtons: function () {
            this.addButton("Run", this.onRun);
            this.addButton("Clear In", this.onClearIn);
            this.addButton("Clear Out", this.onClearOut);
            this.addButton("Version", this.onVersion);
        },

        onClearIn: function () {
            this.getParentWindow().onClearIn();
        },

        onClearOut: function () {
            this.getParentWindow().onClearOut();
        },

        onRun: function () {
            this.getParentWindow().onRun();
        },

        onVersion() {
            this.getParentWindow().onVersion();
        }

    }
});
