qx.Class.define("mychatdb.ui.widgets.SplitPanel", {
    extend: qx.ui.splitpane.Pane,

    construct: function (parentWindow) {
        this.base(arguments);
        // this.initialize(parentWindow);
    },

    properties: {
        // parentWindow: {init: null}
    },

    members: {

        // initialize: function (parentWindow) {
        //     if (parentWindow) this.setParentWindow(parentWindow);
        //     this.setOrientation(this.defaultOrientation());
        //     this.addChildPanels();
        // },

        // addChildPanels: function () {
        // },

        // defaultOrientation: function () {
        //     return 'horizontal';
        // }

    }
});
