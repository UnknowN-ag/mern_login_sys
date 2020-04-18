import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.token;
        const decoded = jwt_decode(token);
        this.setState({
            name: decoded.name,
            email: decoded.email
        })
    }

    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="col-sm-8 mx-auto">
                         <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Profile;