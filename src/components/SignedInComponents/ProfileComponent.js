import React, { Component } from 'react';
import { Card } from 'antd';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Muffin Baggins',
            email: 'muffin@gmail.com',
            phone: '2223232323'
         
        };
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(name => this.setState({ name }))
            .then(email => this.setState({ email }))
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Perfil" style={{ width: 300 }}>
                                <p>Nombre: {this.state.name} </p>
                                <p>Email: {this.state.email}</p>
                                <p>No. Teléfono: {this.state.phone}</p>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProfileComponent;