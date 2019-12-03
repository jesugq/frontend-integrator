// Common imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports.
import SideMenuComponent from './SideMenuComponent';

// Project css.
import './ProfileComponent.css';

/**
* Profile Component holds both the Side Menu, that will be controlling the
* BrowserRouter, and the components that the Switch will provide depending
* on the route given to BrowserRouter.
*/
class ProfileComponent extends Component {

  /**
  * Render of the Profile Component. Two classnames are used, sidebar and
  * content, which denotes the absolute position of the sidebar, and the
  * content which is pushed to the right as to not be offset by the sidebar.
  */
  render() {
    console.log(this.props.user);
    return (
      <div>
        <BrowserRouter>
          <div className="sidebar">
            <SideMenuComponent />
          </div>
          <div className="content">
            <Switch>
              <Route lazy exact path="/profile">Seleccione su opción.</Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);