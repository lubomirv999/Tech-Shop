import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Success.css';

export default class Success extends Component {
    render() {
        return (
            <div className="notFound">
                <div className='c'>
                    <div className='_1'>You have successfully performed the desire action!</div>
                    <Link className='btn' to='/'>HOME</Link>
                </div>
            </div>
        )
    }
}