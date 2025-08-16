qx.Class.define("mychatdb.api.LmApi", {
    type: 'static',

    statics: {
        async send(request, fn) {
            const url = mychatdb.constants.GoogleConstants.GEMINI_API_ENDPOINT;
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
