qx.Class.define("mychatdb.data.server.Server", {
    extend: qx.core.Object,

    properties: {
        // dataMap: {init: new Map}
    },

    members: {

    //     getCode (name) {
    //         const record = this.getRecord(name);
    //         if (record) return record.code; else return 'record ' + name + ' not found';
    //     },

    //     getRecord (name) {
    //         return this.getDataMap().get(name);
    //     },

    //     getScripts(fn) {
    //         const req = new qx.io.request.Xhr(this.getUrl());
    //         req.addListener("success", function (e) {
    //             const result = e.getTarget();
    //             const response = result.getResponse();
    //             const dataMap = this.getDataMap();
    //             dataMap.clear();
    //             const names = [];
    //             for (let i = 0; i < response.length; i++) {
    //                 const item = response[i];
    //                 const name = item.name;
    //                 names.push(name);
    //                 dataMap.set(name, item);
    //             }
    //             names.sort();
    //             fn(names);
    //         }, this);
    //         req.send();
    //     },

    //     getUrl() {
    //         const hostname = window.location.hostname;
    //         if (hostname.startsWith('local') || hostname.endsWith('local'))
    //         return mychatdb.constants.UrlConstants.localUrl;
    //         else
    //             return mychatdb.constants.UrlConstants.remoteUrl;
    //     }

    }
});
