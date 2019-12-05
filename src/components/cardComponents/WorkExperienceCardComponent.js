import React, { Component } from 'react';
import { Card } from 'antd';

class WorkExperienceCardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Experiencia laboral" style={{ width: 300 }}>
                                <p>Institución: {this.props.user.data.tutorDetails.workExperiences[0]}</p>
                                <p>Departamento:{this.props.user.data.tutorDetails.workExperiences[1]}</p>
                                <p>Fecha de inicio:{this.props.user.data.tutorDetails.workExperiences[2]}</p>
                                <p>Fecha de terminación:{this.props.user.data.tutorDetails.workExperiences[3]}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceCardComponent);