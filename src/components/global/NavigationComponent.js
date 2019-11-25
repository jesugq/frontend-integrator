// Common imports.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

// Project imports.
import { signOut } from '../../store/actions/authAction';
import logo from '../../images/aerobot.png';

/**
 * Creation of Styles as a Javascript Object. This is an alternative to the
 * common practice of importing a CSS file and calling the classes from it
 * using the className argument.
 */
const styles = {
  logo: {
    float: 'left',
    width: '120px',
    height: '31px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px 24px 16px 0',
  },
  company: {
    fontSize: '32px',
  },
  menu: {
    lineHeight: '64px',
  },
  content: {
    background: 'rgba(255, 255, 255, 0.90',
  },
  left: {
    float: 'left',
  },
  right: {
    float: 'right',
  }
}

/**
 * Navigation Component is the top bar shown. It is provided by Ant Design and
 * calls to the other components via routing, which is present in the App
 * Javascript file.
 */
class NavigationComponent extends Component {
  /**
   * Render of the Navigation Component. After creating the styles, the
   * Navigation Compponent calls to actions of navigation in a similar manner
   * that other components such as LoggedInLinks or LoggedOutLinks do.
   */
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Layout.Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={styles.menu}
          >
            <Menu.Item style={styles.left}>
              <img src={logo} width="50px" alt="Aerobot" />
            </Menu.Item>
            <Menu.Item style={styles.left}>
              <div style={styles.company}>Aerobot Planet</div>
            </Menu.Item>
            <Menu.Item style={styles.right} key="/">
              <Link to="/">Inicio</Link>
            </Menu.Item>
            {this.props.auth.uid == null ? ([
              <Menu.Item style={styles.right} key="login">
                <Link to="/login">Inicio de Sesión</Link>
              </Menu.Item>
              ,
              <Menu.Item style={styles.right} key="signup">
                <Link to="/signup">Registro</Link>
              </Menu.Item>
            ]) : (
              <Menu.Item style={styles.right} onClick={this.props.signOut}>
               <Link to="/">Cerrar Sesión</Link>
              </Menu.Item>
            )}
          </Menu>
        </Layout.Header>
      </Layout>
    );
  }
}

/**
 * Mapping the state of the Redux store to the Props of Landing Component.
 * @param {state} state 
 */
const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

/**
 * Connection between this component and Redux.
 * @param {dispatch} dispatch Dispatch to do.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);