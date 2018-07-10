import React, { Component } from 'react';

import requester from '../../../api/utilities/requester';

import User from './User';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/font-awesome/css/font-awesome.css';
import './AllUsers.css';

export default class AllUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers = () => {
        requester.get('user', '', 'kinvey')
            .then(res => {
                this.setState({ users: res })
            });
    }

    deleteUser(id) {
        var index = this.state.users.map(function (u) {
            return u._id;
        }).indexOf(id);

        requester.remove('user', id, 'master')
            .then(res => {
                this.setState(prevState => {
                    prevState.users = prevState.users.filter((obj, ix) => ix !== index)
                });

                this.props.history.push('/users');
            })
    }

    shouldDisplayUsers = () => {
        if (sessionStorage.getItem('userId') === '5b44b42561f1880b866d8cd4') {
            return true;
        } else {
            return false;
        }
    }

    componentWillMount = () => {
        this.getUsers();
        this.shouldDisplayUsers();
    }

    componentDidMount = () => {
        this.getUsers();
        this.shouldDisplayUsers();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Profile Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.shouldDisplayUsers ?
                                this.state.users.map((u, i) => <User key={u._id} index={i} {...u} deleteUser={this.deleteUser} />)
                                : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}