qx.Class.define("mychatdb.ui.viewport.Viewport", {
    extend: qx.ui.container.Composite,

    construct: function () {
        this.base(arguments);
        // this.initialize();
    },

    members: {

        // initialize: function () {
        //     this.setBackgroundColor();
        //     this.setDockLayout();
        //     console.log('VIEWPORT');
        //     // this.addListener('appear', this.onAppear, this);
        // },

        // addDesktop: function () {
        //     const desktop = new mychatdb.ui.viewport.desktop.Desktop;
        //     this.add(desktop, {edge: 'center'});
        // },

        // addNavigationBar: function () {
        //     const navbar = new mychatdb.ui.viewport.navbar.NavBar;
        //     this.add(navbar, {edge: 'north'});
        // },

        // onAppear: function () {
        //     this.addNavigationBar();
        //     setTimeout(()=>{
        //         this.addDesktop();
        //     },0);
        // },

        // setBackgroundColor: function () {
        //     const backgroundColor = mychatdb.constants.ColorConstants.ViewportBackground;
        //     this.getContentElement().setStyle('backgroundColor', backgroundColor);
        // },

        // setDockLayout: function () {
        //     const layout = new qx.ui.layout.Dock;
        //     this.setLayout(layout);
        // }
    }
});
