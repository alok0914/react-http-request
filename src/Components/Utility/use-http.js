import React, { useEffect, useState } from 'react';

function useHttp() {
    let [errorMessage, setErrorMessage] = useState(null);

    function sendHttpRequest(url, method, body, action) {
        fetch(
            url, {
            method: method,
            body: body? JSON.stringify(body) : null,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                let data = response.json();
                action(data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }

    return [errorMessage, sendHttpRequest];
}

export default useHttp;