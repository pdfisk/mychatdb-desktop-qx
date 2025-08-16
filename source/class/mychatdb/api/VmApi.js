qx.Class.define("mychatdb.api.VmApi", {
    type: 'static',

    statics: {
        evalCode(code) {
            return window['__BRYTHON__']['runPythonSource'](code);
        }, evalWithStdImports(code) {
            this.evalWithImports(['gui'], code);
        }, evalWithImports(names, code) {
            if (names.length === 0) this.evalCode(code); else {
                const name = names.pop();
                const path = 'scripts/' + name + '.py';
                window.fetch(path)
                    .then(res => res.text())
                    .then(text => {
                        code = text + '\n' + code;
                        this.evalWithImports(names, code);
                    })
            }
        }
    }

});
