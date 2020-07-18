import React, { useState, useEffect } from 'react'

function useEffectHook1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`

    });
    return (
        <div>
            <p>you Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click Me </button>
        </div>
    );
}

export default useEffectHook1
