qx.Class.define("mychatdb.util.LoaderUtil", {
    type: 'static',

    statics: {
        load(imports, code) {
            if (imports.length === 0) {
                mychatdb.api.VmApi.evalCode(code);
                return;
            }
            const name = imports.shift();
            const path = 'scripts/' + name + '.py';
            window.fetch(path).then(response => { return response.text() }).then(text => { console.log(text); this.load(imports, text) })
        }
    }

});
