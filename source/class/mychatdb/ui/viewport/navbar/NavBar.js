qx.Class.define("mychatdb.ui.viewport.navbar.NavBar", {
    extend: qx.ui.container.Composite,

    construct () {
        this.base(arguments);
        // this.initialize();
    },

    members: {

        // initialize () {
        //     this.setBackgroundColor();
        //     this.setHBoxLayout();
        //     this.addButtons();
        // },

        // addButton (label, handlerFn) {
        //     const button = new qx.ui.form.Button(label);
        //     button.addListener("click", handlerFn, this);
        //     this.add(button);
        // },

        // addButtons () {
        //     this.addButton('Scripts', this.onScriptsClick);
        //     this.addButton('Console', this.onConsoleClick);
        //     this.addButton('Chat', this.onChatClick);
        // },

        // onChatClick () {
        //     mychatdb.api.QxApi.eval_code('ChatConsole()');
        // },

        // onConsoleClick () {
        //     const consoleWindow = new mychatdb.ui.windows.console.ConsoleWindow;
        //     consoleWindow.show();
        // },

        // onScriptsClick () {
        //     const scriptsWindow = new mychatdb.ui.windows.scripts_window.ScriptsWindow;
        //     scriptsWindow.show();
        // },

        // setBackgroundColor () {
        //     const backgroundColor = mychatdb.constants.ColorConstants.NavBarBackground;
        //     this.getContentElement().setStyle('backgroundColor', backgroundColor);
        // },

        // setHBoxLayout () {
        //     const layout = new qx.ui.layout.HBox(7);
        //     this.setLayout(layout);
        // }
    }
});
