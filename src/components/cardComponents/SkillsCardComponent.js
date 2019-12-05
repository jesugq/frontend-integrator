import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class SkillsCardComponent extends Component {

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            <Card title="Habilidades" style={{ width: 300 }}>
                                <p>Tema: {this.props.user.data.tutorDetails.skills[0].topic} </p>
                                <p>Nivel de experiencia: {this.props.user.data.tutorDetails.skills[0].experience}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsCardComponent);