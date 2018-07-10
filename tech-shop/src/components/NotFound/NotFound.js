import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

export default class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <div className='c'>
                    <div className='_404'>404</div>
                    <hr />
                    <div className='_1'>THE PAGE</div>
                    <div className='_2'>WAS NOT FOUND</div>
                    <Link className='btn' to="/">BACK TO HOME</Link>
                </div>
            </div>
        )
    }
}