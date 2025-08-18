qx.Class.define("mychatdb.api.LmApi", {
    type: 'static',

    statics: {
        async send(request, fn) {
            console.log('SEND', request);
            const url = 'http://10.0.0.11:1234/v1/chat/completions';
            const key = 'a key';
            const response = await window.fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
                body: JSON.stringify(request)
            });
            console.log(response);
            window.X = response;
        },
        async send2(request, fn) {
            const url = 'localhost:1234'; // mychatdb.constants.GoogleConstants.GEMINI_API_ENDPOINT;
            const key = mychatdb.constants.GoogleConstants.GEMINI_API_KEY;
            const response = await window.fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
                body: JSON.stringify(request)
            });
            console.log(response);
            window.X = response;
        }
    }

});
