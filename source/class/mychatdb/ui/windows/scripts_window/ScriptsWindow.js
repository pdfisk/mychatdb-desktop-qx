qx.Class.define("mychatdb.ui.windows.scripts_window.ScriptsWindow", {
  extend: mychatdb.ui.windows.base.AbstractWindow,

  properties: {
    // selectedCode: { init: "" },
  },

  members: {
    // addContent () {
    //   this.setContentPanel(
    //     new mychatdb.ui.windows.scripts_window.widgets.ContentPanel(this)
    //   );
    //   this.setButtonBar(
    //     new mychatdb.ui.windows.scripts_window.widgets.ButtonBar(this)
    //   );
    //   this.add(this.getButtonBar(), { edge: "south" });
    //   this.add(this.getContentPanel(), { edge: "center" });
    // },

    // clear () {
    //   this.setSelectedCode("");
    //   this.setCode("");
    // },

    // defaultCaption () {
    //   return "Scripts Browser";
    // },

    // getCode() {
    //   return this.getCodePanel().getValue();
    // },

    // getSelectedCode() {
    //   return this.getSelectedCode();
    // },

    // getCodePanel() {
    //   return this.getContentPanel().getCodePanel();
    // },

    // getListPanel() {
    //   return this.getContentPanel().getListPanel();
    // },

    // getServer() {
    //   return this.getContentPanel().getServer();
    // },

    // getServerCode() {
    //   return this.getSelectedCode();
    // },

    // onAppear() {
    //   this.base(arguments);
    //   this.refresh();
    // },

    // onConsole() {
    //   const code = this.getCode();
    //   const consoleWindow = new mychatdb.ui.windows.console.ConsoleWindow();
    //   consoleWindow.setValue(code);
    //   consoleWindow.show();
    // },

    // onRefresh () {
    //   this.refresh();
    // },

    // onSelect(key) {
    //   const server = this.getServer();
    //   const code = server.getCode(key);
    //   this.setSelectedCode(code);
    //   this.setCode(code);
    // },

    // refresh () {
    //   this.clear();
    //   this.getListPanel().refresh();
    // },

    // setCode (text) {
    //   return this.getCodePanel().setValue(text);
    // },
  },
});
