import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class ProfileCardComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Información usuario" style={{ width: 300 }}>
                                <p>Nombre: {this.props.user.data.name} </p>
                                <p>Email: {this.props.user.data.email}</p>
                                <p>No. Teléfono: {this.props.user.data.phone}</p>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

/**
 * Mapping the state of the redux store to the props of this component.
 * @param {state} state
 */
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  }

export default connect(mapStateToProps, null)(ProfileCardComponent);