import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDom.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
