import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class CertificationsCardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []         
        };
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Certificaciones" style={{ width: 300 }}>
                                <p>Institución: {this.props.user.tutorDetails.certifications[0].institution}</p>
                                <p>Título: {this.props.user.tutorDetails.certifications[0].title}</p>
                                <p>Fecha: {this.props.user.tutorDetails.certifications[0].date}</p>
                                <p>Diploma (URL): {this.props.user.tutorDetails.certifications[0].diplomaURL}</p>
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

export default connect(mapStateToProps, null)(CertificationsCardComponent);