import React, { Component } from 'react';

export default class User extends Component {
    render = () => {
        return (
            <tr>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                <td><img src={this.props.imageUrl} alt="userProfilePic"/></td>
                <td>
                    <button className="userDelete" onClick={() => this.props.deleteUser(this.props._id)}>Delete</button>
                </td>
            </tr>
        )
    }
}