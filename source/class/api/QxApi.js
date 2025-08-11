qx.Class.define("mychatdb.api.QxApi", {
    type: 'static',

    statics: {
        _stdout: null,

        _dictionary: {},

        add_click_handler(obj, handler) {
            obj.addListener('click', () => {
                handler()
            });
        },

        eval_code(code) {
            return mychatdb.api.VmApi.evalWithStdImports(code);
        },

        get_global(key) {
            return this._dictionary[key];
        },

        get_timestamp() {
            return mychatdb.constants.Version.timestamp;
        },

        make_button(label) {
            // return new qx.ui.form.Button(label);
        },

        make_split_panel() {
            // return new mychatdb.ui.widgets.SplitPanel();
        },

        make_transcript_panel() {
            // return new mychatdb.ui.widgets.TranscriptPanel();
        },

        make_window() {
            // return mychatdb.util.WindowManager.make_window();
        },

        pr(text) {
            if (this._stdout) this._stdout.pr(text);
        },

        prn(text) {
            if (this._stdout) this._stdout.prn(text);
        },

        send_lm(text) {
            // const fn = value => {
                // this.pr(value);
            // };
            // window.send_llm(text, fn);
        },

        set_global(key, value) {
            this._dictionary[key] = value;
        },

        set_std_out(widget) {
            this._stdout = widget;
        }
    }

});
