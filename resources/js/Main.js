import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute/AppRoute';

class Main extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <AppRoute />
                </BrowserRouter>
            </>
        );
    }
}

export default Main;