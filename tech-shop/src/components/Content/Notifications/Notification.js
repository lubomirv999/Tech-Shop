import React, { Component } from 'react';

import observer from '../../../api/utilities/observer';
import './Notification.css';

const DEFAULT_STATE = {
    success: null,
}

export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = DEFAULT_STATE;

        observer.subscribe(observer.events.notification, this.showNotification);
    }

    showNotification = data => {
        let message = data;
        this.setState({
            message: message
        });
    }

    hideNotification = ev => this.setState(DEFAULT_STATE);

    render = () => {
        if (this.state.message) {
            return (
                <div className="notification">
                    <span>{this.state.message}</span>
                </div>
            );
        } else {
            return null;
        }
    }
}