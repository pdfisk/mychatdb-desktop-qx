qx.Class.define("mychatdb.ui.widgets.TranscriptPanel", {
    extend: qx.ui.form.TextArea,

    construct: function () {
        this.base(arguments);
        // this.initialize();
    },

    members: {

        // initialize: function () {
        //     this.addListener('appear', this.onAppear, this);
        //     this.clear();
        // },

        // clear: function () {
        //     this.setValue('');
        // },

        // onAppear() {
        //     this.getContentElement().setStyle('fontFamily', 'monospace, sans-serif');
        // },

        // pr(text) {
        //     const oldText = this.getValue();
        //     this.setValue(oldText + text);
        // },

        // prn(text) {
        //     this.pr(text + "\n");
        // }

    }
});
