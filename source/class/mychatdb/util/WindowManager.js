qx.Class.define("mychatdb.util.WindowManager", {
    type: 'static',

    statics: {
        make_window() {
            const win = new mychatdb.ui.windows.common.CommonWindow;
            win.show();
            return win;
        }
    }

});
