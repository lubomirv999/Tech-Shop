import React, { Component } from 'react';

import './NotFound.css';

export default class AppRouter extends Component {
    render() {
        return (
            <div className="notFound">
                <div className='c'>
                    <div className='_404'>404</div>
                    <hr />
                    <div className='_1'>THE PAGE</div>
                    <div className='_2'>WAS NOT FOUND</div>
                    <a className='btn' href='/'>BACK TO HOME</a>
                </div>
            </div>
        )
    }
}