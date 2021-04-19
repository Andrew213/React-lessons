
import "./scss/style.scss"
import "./index.html";
import React from 'react';
import { render } from 'react-dom';
import App from './js/App.jsx';


render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)


