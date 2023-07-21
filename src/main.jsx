import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './components/reset.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <GlobalStyles />
    </>
)