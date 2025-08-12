qx.Class.define("mychatdb.ui.widgets.ButtonBar", {
    extend: qx.ui.container.Composite,

    construct: function (parentWindow) {
        this.base(arguments);
        // this.initialize(parentWindow);
    },

    properties: {
        // parentWindow: {init: null}
    },

    members: {

        // initialize: function (parentWindow) {
        //     this.setParentWindow(parentWindow);
        //     this.setBackgroundColor();
        //     this.setHeight(mychatdb.constants.SizeConstants.ButtonBarHeight);
        //     this.setHBoxLayout();
        //     this.addButtons();
        // },

        // addButton(label, handlerFn) {
        //     const button = new qx.ui.form.Button(label);
        //     button.addListener("click", handlerFn, this);
        //     this.add(button);
        // },

        // addButtons: function () {
        // },

        // setBackgroundColor: function () {
        //     const backgroundColor = mychatdb.constants.ColorConstants.ButtonBarBackground;
        //     this.getContentElement().setStyle('backgroundColor', backgroundColor);
        // },

        // setHBoxLayout: function () {
        //     const layout = new qx.ui.layout.HBox(7);
        //     this.setLayout(layout);
        // }
    }
});
