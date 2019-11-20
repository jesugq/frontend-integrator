// Common imports.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

// Project imports.
import LoggedInLinks from './LoggedInLinks';
import logo from '../../images/aerobot.png';

/**
 * Navigation Component is the top bar shown. It is provided by Ant Design and
 * calls to the other components via routing, which is present in the App
 * Javascript file.
 */
class NavigationComponent extends Component {
  /**
   * Creation of Styles as a Javascript Object. This is an alternative to the
   * common practice of importing a CSS file and calling the classes from it
   * using the className argument.
   */
  createStyles() {
    return ({
      header: {
        position: 'fixed',
        width: '100%',
        zIndex: 1,
      },
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
        marginTop: '64px',
        minHeight: (isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight) - 295,
      },
      left: {
        float: 'left',
      },
      right: {
        float: 'right',
      }
    });
  }

  /**
   * Render of the Navigation Component. After creating the styles, the
   * Navigation Compponent calls to actions of navigation in a similar manner
   * that other components such as LoggedInLinks or LoggedOutLinks do.
   */
  render() {
    const styles = this.createStyles();

    return (
      <Layout>
        <Layout.Header style={styles.header}>
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
          </Menu>
        </Layout.Header>
      </Layout>
    );
  }
}

/**
 * Mapping the state of the props for use in Redux.
 * @param state The state of the props. 
 */
const mapStateToProps = (state) => {
  console.log(state)
  return {
    // Nothing here!
  }
}

export default connect(mapStateToProps)(NavigationComponent);