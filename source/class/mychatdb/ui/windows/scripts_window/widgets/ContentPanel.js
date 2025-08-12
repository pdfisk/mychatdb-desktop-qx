qx.Class.define("mychatdb.ui.windows.scripts_window.widgets.ContentPanel", {
    extend: mychatdb.ui.widgets.SplitPanel,

    properties: {
        // codePanel: {init: null}, listPanel: {init: null}
    },

    members: {

        // addChildPanels: function () {
        //     this.setListPanel(new mychatdb.ui.windows.scripts_window.widgets.ScriptsListPanel(this.getParentWindow()));
        //     this.setCodePanel(new mychatdb.ui.widgets.TranscriptPanel(this.getParentWindow()));
        //     this.add(this.getListPanel(), 1);
        //     this.add(this.getCodePanel(), 1);
        // },

        // getServer: function () {
        //     return this.getListPanel().getServer();
        // }

    }
});
