import React, { useCallback } from 'react'
import { createRoot } from 'react-dom/client'

function App() {

    const handleClick = useCallback(() => {
        console.log('>>> click')
    }, [])

    return (
        <section>
            <h1>Hello World</h1>
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}

createRoot(document.getElementById('app')).render(<App />)