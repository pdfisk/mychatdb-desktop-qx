qx.Class.define("mychatdb.api.LmApi", {
    type: 'static',

    statics: {
        async send(text, fn) {
            const endpoint = mychatdb.constants.LlmConstants.LMS_API_ENDPOINT;
            const url = endpoint + '/v1/chat/completions';
            const key = mychatdb.constants.LlmConstants.GEMINI_API_KEY;
            try {
                const response = await window.fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    },
                    body: JSON.stringify({
                        messages: [
                            { role: 'system', content: 'You are a helpful assistant.' },
                            { role: 'user', content: text }
                        ]
                    })
                });
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                const reply = data.choices[0].message.content;
                if (typeof (fn) === 'function')
                    fn(reply);
                else
                    console.log('REPLY: ', reply);
            }
            catch (error) {
                console.log('ERROR: ', error);
            };
        }
    }
});

// send2(request, fn) {
//     console.log('SEND', request);
//     const endpoint = mychatdb.constants.LlmConstants.GEMINI_API_ENDPOINT;
//     const url = endpoint + '/v1/chat/completions';
//     const key = mychatdb.constants.LlmConstants.GEMINI_API_KEY;
//     const xhr = new qx.io.request.Xhr;
//     xhr.setUrl(url);
//     xhr.setMethod('POST');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestData(JSON.stringify(request));
//     xhr.addListener('success', (response) => {
//         console.log('SUCCESS', response);
//     });
//     xhr.addListener('failure', (response) => {
//         console.log('FAILURE', response);
//     });
//     xhr.send();
// },
// async send3(request, fn) {
//     const url = 'localhost:1234'; // mychatdb.constants.LlmConstants.GEMINI_API_ENDPOINT;
//     const key = mychatdb.constants.LlmConstants.GEMINI_API_KEY;
//     const response = await window.fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${key}`
//         },
//         body: JSON.stringify(request)
//     });
//     console.log(response);
//     window.X = response;
// }
