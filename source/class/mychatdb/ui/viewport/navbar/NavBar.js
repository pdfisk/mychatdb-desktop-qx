qx.Class.define("mychatdb.ui.viewport.navbar.NavBar", {
    extend: qx.ui.container.Composite,

    construct: function () {
        this.base(arguments);
        // this.initialize();
    },

    members: {

        // initialize: function () {
        //     this.setBackgroundColor();
        //     this.setHBoxLayout();
        //     this.addButtons();
        // },

        // addButton: function (label, handlerFn) {
        //     const button = new qx.ui.form.Button(label);
        //     button.addListener("click", handlerFn, this);
        //     this.add(button);
        // },

        // addButtons: function () {
        //     this.addButton('Scripts', this.onScriptsClick);
        //     this.addButton('Console', this.onConsoleClick);
        //     this.addButton('Chat', this.onChatClick);
        // },

        // onChatClick: function () {
        //     mychatdb.api.QxApi.eval_code('ChatConsole()');
        // },

        // onConsoleClick: function () {
        //     const consoleWindow = new mychatdb.ui.windows.console.ConsoleWindow;
        //     consoleWindow.show();
        // },

        // onScriptsClick: function () {
        //     const scriptsWindow = new mychatdb.ui.windows.scripts_window.ScriptsWindow;
        //     scriptsWindow.show();
        // },

        // setBackgroundColor: function () {
        //     const backgroundColor = mychatdb.constants.ColorConstants.NavBarBackground;
        //     this.getContentElement().setStyle('backgroundColor', backgroundColor);
        // },

        // setHBoxLayout: function () {
        //     const layout = new qx.ui.layout.HBox(7);
        //     this.setLayout(layout);
        // }
    }
});
