qx.Class.define("mychatdb.ui.windows.console.ConsoleWindow", {
    extend: mychatdb.ui.windows.base.AbstractWindow,

    members: {

        addContent() {
            this.setContentPanel(new mychatdb.ui.windows.console.widgets.ContentPanel(this));
            this.setButtonBar(new mychatdb.ui.windows.console.widgets.ButtonBar(this));
            this.add(this.getButtonBar(), { edge: 'south' });
            this.add(this.getContentPanel(), { edge: 'center' });
        },

        clearIn() {
            this.getEditorPanel().clear();
        },

        clearOut() {
            this.getTranscriptPanel().clear();
        },

        defaultCaption() {
            return 'Python Console';
        },

        getCode() {
            return this.getEditorPanel().getValue();
        },

        getEditorPanel() {
            return this.getContentPanel().getEditorPanel();
        },

        getTranscriptPanel() {
            return this.getContentPanel().getTranscriptPanel();
        },

        evalCode(code) {
            const imports = ['gui'];
            mychatdb.api.VmApi.evalWithImports(imports, code);
        },

        onClearIn() {
            this.clearIn();
        },

        onClearOut() {
            this.clearOut();
        },

        onRun() {
            this.clearOut();
            mychatdb.api.QxApi.set_std_out(this.getTranscriptPanel());
            const code = this.getCode();
            this.evalCode(code);
        },

        onVersion() {
            this.clearOut();
            this.prn(mychatdb.constants.Version.timestamp);
        },

        prn(text) {
            this.getTranscriptPanel().prn(text);
        },

        setValue(code) {
            console.log('ConsoleWindow setValue', code);
            this.getEditorPanel().setValue(code);
        }
    }
});
