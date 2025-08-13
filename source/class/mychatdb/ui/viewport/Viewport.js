qx.Class.define("mychatdb.ui.viewport.Viewport", {
    extend: qx.ui.container.Composite,

    construct() {
        this.base(arguments);
        this.initialize();
    },

    members: {

        initialize() {
            this.setBackgroundColor();
            this.setDockLayout();
            this.addListener('appear', this.onAppear, this);
        },

        addDesktop() {
            const desktop = new mychatdb.ui.viewport.desktop.Desktop;
            this.add(desktop, { edge: 'center' });
        },

        addNavigationBar() {
            const navbar = new mychatdb.ui.viewport.navbar.NavBar;
            this.add(navbar, { edge: 'north' });
        },

        onAppear() {
            console.log('onAppear');
            // this.addNavigationBar();
            // setTimeout(() => {
                // this.addDesktop();
            // }, 0);
        },

        setBackgroundColor() {
            const backgroundColor = mychatdb.constants.ColorConstants.ViewportBackground;
            this.getContentElement().setStyle('backgroundColor', backgroundColor);
        },

        setDockLayout() {
            const layout = new qx.ui.layout.Dock;
            this.setLayout(layout);
        }
    }
}
);
