import React, { Component } from 'react';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/font-awesome/css/font-awesome.css';
import './AllUsers.css';

export default class AllUsers extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>test@test.com</td>
                        <td>
                            <button className="userDeleteBtn">Delete</button>
                        </td>
                    </tr> 
                    <tr>
                        <td>Test</td>
                        <td>test@test.com</td>
                        <td>
                            <button className="userDeleteBtn">Delete</button>
                        </td>
                    </tr>  
                    <tr>
                        <td>Test</td>
                        <td>test@test.com</td>
                        <td>
                            <button className="userDeleteBtn">Delete</button>
                        </td>
                    </tr>                 
                    <tr>
                        <td>Test</td>
                        <td>test@test.com</td>
                        <td>
                            <button className="userDeleteBtn">Delete</button>
                        </td>
                    </tr>  
                    <tr>
                        <td>Test</td>
                        <td>test@test.com</td>
                        <td>
                            <button className="userDeleteBtn">Delete</button>
                        </td>
                    </tr>  
                </table>
            </div>
        )
    }
}