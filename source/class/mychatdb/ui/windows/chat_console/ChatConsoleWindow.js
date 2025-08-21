qx.Class.define("mychatdb.ui.windows.chat_console.ChatConsoleWindow", {
    extend: mychatdb.ui.windows.base.AbstractWindow,

    properties: {
        startTime: { init: (new Date).getTime() }
    },

    members: {

        addContent() {
            this.setContentPanel(new mychatdb.ui.windows.chat_console.widgets.ContentPanel(this));
            this.setButtonBar(new mychatdb.ui.windows.chat_console.widgets.ButtonBar(this));
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
            return 'Chat Console';
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

        onClearIn() {
            this.clearIn();
        },

        onClearOut() {
            this.clearOut();
        },

        onSend() {
            this.setStartTime((new Date).getTime());
            this.clearOut();
            this.prn('sending...');
            mychatdb.api.QxApi.set_stdout(this.getTranscriptPanel());
            const code = this.getCode();
            this.sendCode(code);
        },

        prn(text) {
            this.getTranscriptPanel().prn(text);
        },

        sendCode(code) {
            const fn = (text) => {
                this.clearOut();
                const seconds = ((new Date).getTime() - this.getStartTime()) / 1000;
                text = 'Time: ' + seconds + ' seconds\n' + text;
                const panel = this.getTranscriptPanel();
                panel.prn(text);
            };
            mychatdb.api.LmApi.send(code, fn);
        },

        setValue(code) {
            this.getEditorPanel().setValue(code);
        }
    }
});
