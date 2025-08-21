qx.Class.define("mychatdb.ui.windows.python_console.widgets.ContentPanel", {
    extend: mychatdb.ui.widgets.SplitPanel,

    properties: {
        editorPanel: {init: null},
        transcriptPanel: {init: null}
    },

    members: {

        addChildPanels () {
            this.setEditorPanel(new mychatdb.ui.widgets.EditorPanel(this.getParentWindow()));
            this.setTranscriptPanel(new mychatdb.ui.widgets.TranscriptPanel(this.getParentWindow()));
            this.add(this.getEditorPanel(), 1);
            this.add(this.getTranscriptPanel(), 1);
        }

    }
});
