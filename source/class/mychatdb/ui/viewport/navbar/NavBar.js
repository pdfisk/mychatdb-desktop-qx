qx.Class.define("mychatdb.ui.viewport.navbar.NavBar", {
    extend: qx.ui.container.Composite,

    construct() {
        this.base(arguments);
        this.initialize();
    },

    members: {

        initialize() {
            this.setHBoxLayout();
            this.addButtons();
            this.addListener('appear', this.onAppear, this);
        },

        addButton(label, handlerFn) {
            const button = new qx.ui.form.Button(label);
            button.addListener('click', handlerFn, this);
            this.add(button);
        },

        addButtons() {
            this.addButton('Scripts', this.onScriptsClick);
            this.addButton('Console', this.onConsoleClick);
            this.addButton('Chat', this.onChatClick);
        },

        onAppear() {
            this.setBackgroundColor();
        },

        onChatClick() {
            const chatWindow = new mychatdb.ui.windows.chat_console.ChatConsoleWindow;
            chatWindow.show();
        },

        onConsoleClick() {
            const consoleWindow = new mychatdb.ui.windows.python_console.PythonConsoleWindow;
            consoleWindow.show();
        },

        onScriptsClick() {
            const scriptsWindow = new mychatdb.ui.windows.scripts_window.ScriptsWindow;
            scriptsWindow.show();
        },

        setBackgroundColor() {
            const backgroundColor = mychatdb.constants.ColorConstants.NavBarBackground;
            this.getContentElement().setStyle('backgroundColor', backgroundColor);
        },

        setHBoxLayout() {
            const layout = new qx.ui.layout.HBox(7);
            this.setLayout(layout);
        }

    }
});
