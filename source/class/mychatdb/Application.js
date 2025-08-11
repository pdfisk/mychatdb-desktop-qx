qx.Class.define("mychatdb.Application",
  {
    extend: qx.application.Standalone,

    members:
    {

      main: function () {
        this.base(arguments);

        var button1 = new qx.ui.form.Button("Yo AGAIN DUDE!", "mychatdb/test.png");

        var doc = this.getRoot();
        doc.add(button1, { left: 100, top: 50 });

        button1.addListener("execute", function () {
          alert("Yo THERE AGAIN DUDE!!!");
        });
      }

    }
  });