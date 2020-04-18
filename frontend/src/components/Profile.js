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
        if(localStorage.token){
            const token = localStorage.token;
            const decoded = jwt_decode(token);
            this.setState({
                name: decoded.name,
                email: decoded.email
            })
        }
        
    }

    render(){

        const welDiv = (
            <div className="container mt-5">
                <div className="jumbotron">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome</h1>
                    </div>
                </div>
            </div>
        )

        const profileDiv = (
            <div className="container mt-5">
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

        return (
            <div>
                {localStorage.token ? profileDiv : welDiv}
            </div>            
        )
    }

}

export default Profile;