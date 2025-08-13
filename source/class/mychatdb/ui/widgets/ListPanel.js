qx.Class.define("mychatdb.ui.widgets.ListPanel", {
    extend: qx.ui.list.List,

    construct(parentWindow) {
        this.base(arguments);
        this.initialize(parentWindow);
    },

    properties: {
        parentWindow: { init: null };
    },

    members: {

        initialize(parentWindow) {
            this.setParentWindow(parentWindow);
            this.getSelection().addListener("change", this.onSelect, this);
        },

        clear() {
            this.setValues([]);
        },

        refresh() {
            this.clear();
        },

        onSelect() {
            const selection = this.getSelection();
            if (!selection) return;
            const name = selection.getItem(0).toString();
            this.getParentWindow().onSelect(name);
        },

        setValues(rawData) {
            const model = qx.data.marshal.Json.createModel(rawData);
            this.setModel(model);
        }

    }
});
