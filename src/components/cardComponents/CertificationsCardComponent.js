import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class CertificationsCardComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Certificaciones" style={{ width: 300 }}>
                                <p>Institución: {this.props.user.data.certificactions[0].institution}</p>
                                <p>Título:{this.props.user.data.certificactions[0].title}</p>
                                <p>Fecha:{this.props.user.data.certificactions[0].date}</p>
                                <p>Diploma (URL):{this.props.user.data.certificactions[0].diplomaURL}</p>
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
  
  /**
   * Mapping the dispatch function to the props of this function.
   * @param {dispatch} dispatch 
   */
  const mapDispatchToProps = (dispatch) => {
    return {
      
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CertificationsCardComponent);