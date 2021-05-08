
import "./scss/style.scss"
import "./index.html";
import './ts/example.tsx'
import React from 'react';
import { render } from 'react-dom';
import App from './js/App.tsx';


render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
