qx.Class.define("mychatdb.ui.widgets.EditorPanel", {
  extend: qx.ui.container.Composite,

  construct: function () {
    this.base(arguments);
    // this.initialize();
  },

  properties: {
    // editor: { init: null },
    // hasAppeared: { init: false },
    // hasRendered: { init: false },
    // initValue: { init: "" },
  },

  members: {
    // initialize: function () {
    //   this.addListener("appear", this.onAppear, this);
    // },

    // onAppear() {
    //   if (this.getHasAppeared()) return;
    //   this.setHasAppeared(true);
    //   const domNode = this.getContentElement().getDomElement();
    //   const mode = window.qx.lang.String.format("ace/mode/%1", ["python"]);
    //   const config = { mode: mode };
    //   this.setEditor(window.ace.edit(domNode, config));
    //   this.getEditor().setValue(this.getInitValue());
    //   // this.setRange();
    //   // this.getEditor().setTheme("ace/theme/dreamweaver");
    //   this.getEditor().renderer.on("afterRender", () => {
    //     this.onRender();
    //   });
    // },

    // onRender() {
    //   if (this.getHasRendered()) return;
    //   this.setHasRendered(true);
    //   this.setValue(this.getInitValue());
    //   this.setInitValue("");
    // },

    // clear: function () {
    //   this.setValue("");
    // },

    // getValue() {
    //   if (!this.getHasRendered()) return this.getInitValue();
    //   return this.getEditor().getValue();
    // },

    // setRange() {
    //   this.getEditor().selection.setRange(new window.ace.Range(0, 0, 0, 0));
    // },

    // setValue(code) {
    //   if (!this.getHasRendered()) this.setInitValue(code);
    //   else {
    //     this.getEditor().setValue(code);
    //     this.setRange();
    //   }
    },
  },
});
