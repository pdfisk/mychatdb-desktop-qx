qx.Class.define("mychatdb.ui.widgets.ListPanel", {
    extend: qx.ui.list.List,

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
        //     this.getSelection().addListener("change", this.onSelect, this);
        // },

        // clear: function () {
        //     this.setValues([]);
        // },

        // refresh: function () {
        //     this.clear();
        // },

        // onSelect: function () {
        //     const selection = this.getSelection();
        //     if (!selection) return;
        //     const name = selection.getItem(0).toString();
        //     this.getParentWindow().onSelect(name);
        // },

        // setValues: function (rawData) {
        //     const model = qx.data.marshal.Json.createModel(rawData);
        //     this.setModel(model);
        // }

    }
});
