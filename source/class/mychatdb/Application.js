qx.Class.define("mychatdb.Application",
  {
    extend: qx.application.Standalone,

    members:
    {
      main() {
        this.base(arguments);
        const viewport = new mychatdb.ui.viewport.Viewport;
        this.getRoot().add(viewport, { top: 0, right: 0, bottom: 0, left: 0 });
      }
    }

  });
