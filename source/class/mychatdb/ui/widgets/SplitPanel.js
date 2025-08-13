qx.Class.define("mychatdb.ui.widgets.SplitPanel", {
    extend: qx.ui.splitpane.Pane,

    construct (parentWindow) {
        this.base(arguments);
        this.initialize(parentWindow);
    },

    properties: {
        parentWindow: {init: null}
    },

    members: {

        initialize (parentWindow) {
            if (parentWindow) this.setParentWindow(parentWindow);
            this.setOrientation(this.defaultOrientation());
            this.addChildPanels();
        },

        addChildPanels () {
        },

        defaultOrientation () {
            return 'horizontal';
        }

    }
});
