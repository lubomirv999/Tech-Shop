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

    componentWillMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        requester.get('user', '', 'kinvey')
            .then(res => {
                this.setState({ users: res })
            });
    }

    deleteUser(id) {
        var index = this.state.users.map(function (u) { return u.Id; }).indexOf(id);
        var newUsers = this.state.users.splice(index, 1);

        requester.remove('user', id, 'kinvey')
            .then(res => {
                this.setState({
                    users: newUsers
                })
                this.props.history.push('/users');
            })
    }



    componentDidMount = () => {
        this.getUsers();
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
                        {this.state.users.map((u, i) => <User key={u._id} index={i} {...u} deleteUser={this.deleteUser} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}