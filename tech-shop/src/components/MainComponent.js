import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import AppRouter from './AppRouter';

export default class MainController extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <AppRouter />            
                <Footer />
            </div>
        )
    }
}