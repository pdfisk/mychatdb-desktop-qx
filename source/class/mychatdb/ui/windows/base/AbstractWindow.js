qx.Class.define("mychatdb.ui.windows.base.AbstractWindow", {
    extend: qx.ui.window.Window,

    construct() {
        this.base(arguments);
        this.initialize();
    },

    properties: {
        buttonBar: { init: null },
        contentPanel: { init: null }
    },

    members: {

        initialize() {
            this.setCaption(this.defaultCaption());
            this.setWidth(mychatdb.constants.SizeConstants.WindowWidth);
            this.setHeight(mychatdb.constants.SizeConstants.WindowHeight);
            this.setContentPadding(mychatdb.constants.SizeConstants.WindowContentPadding);
            this.setLayout(new qx.ui.layout.Dock);
            this.addContent();
            this.addListener('appear', this.onAppear, this);
        },

        defaultCaption() {
            return 'a Window';
        },

        addContent() {
        },

        onAppear() {
            this.center();
        },

        onSelect(key) {
            console.log('onSelect: ' + key);
        }

    }
});
