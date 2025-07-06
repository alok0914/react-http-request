import React, { useEffect, useState } from 'react';

function useCounter(increment = true) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (increment) {
                setCounter(counter => counter + 1);
            } else {
                setCounter(counter => counter - 1);
            }
        }, 1000)

    }, [])

    return counter;
}

export default useCounter;