import React, { Component } from 'react';
import { Card } from 'antd';

class ProfileCardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []         
        };
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Información usuario" style={{ width: 300 }}>
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

/**
 * Mapping the state of the redux store to the props of this component.
 * @param {state} state
 */
const mapStateToProps = (state) => {
    return {
      userData: state.user,
    };
  }
  
  /**
   * Mapping the dispatch function to the props of this function.
   * @param {dispatch} dispatch 
   */
  const mapDispatchToProps = (dispatch) => {
    return {
      
    };
  }

export default ProfileCardComponent;