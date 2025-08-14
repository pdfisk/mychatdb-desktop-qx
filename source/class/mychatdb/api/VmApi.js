qx.Class.define("mychatdb.api.VmApi", {
    type: 'static',

    statics: {
        evalCode(code) {
            // console.log('evalCode', code);
            return window['__BRYTHON__']['runPythonSource'](code);
        }, evalWithStdImports(code) {
            this.evalWithImports(['gui'], code);
        }, evalWithImports(names, code) {
            // console.log('evalWithImports', names);
            if (names.length === 0) this.evalCode(code); else {
                const name = names.pop();
                // console.log('NAME', name);
                const path = 'scripts/' + name + '.py';
                window.fetch(path)
                    .then(res => res.text())
                    .then(text => {
                        // console.log('TEXT', text);
                        code = text + '\n' + code;
                        this.evalWithImports(names, code);
                    })
            }
        }
    }

});
