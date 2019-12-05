import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class WorkExperienceCardComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Experiencia laboral" style={{ width: 300 }}>
                                <p>Institución: {this.props.user.data.tutorDetails.workExperiences[0].institution}</p>
                                <p>Departamento:{this.props.user.data.tutorDetails.workExperiences[0].department}</p>
                                <p>Fecha de inicio:{this.props.user.data.tutorDetails.workExperiences[0].beginDate}</p>
                                <p>Fecha de terminación:{this.props.user.data.tutorDetails.workExperiences[0].endDate}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceCardComponent);