qx.Class.define("mychatdb.ui.widgets.TranscriptPanel", {
    extend: qx.ui.form.TextArea,

    construct () {
        this.base(arguments);
        this.initialize();
    },

    members: {

        initialize() {
            this.addListener('appear', this.onAppear, this);
            this.clear();
        },

        clear() {
            this.setValue('');
        },

        onAppear() {
            this.getContentElement().setStyle('fontFamily', 'monospace, sans-serif');
        },

        pr(text) {
            const oldText = this.getValue();
            this.setValue(oldText + text);
        },

        prn(text) {
            this.pr(text + "\n");
        }

    }
});
