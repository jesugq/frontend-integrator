import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import NotFoundComponent from '../global/NotFoundComponent';
import FooterComponent from '../global/FooterComponent';
import LandingComponent from '../landing/LandingComponent';
import LoginComponent from '../registry/LoginComponent';
import SignUpComponent from '../registry/SignUpComponent';

import logo from '../../images/aerobot.png';

class NavigationComponent extends Component {
  createTexts() {
    return({
      app: 'EduApp',
      landing: 'Inicio',
      login: 'Ingresar',
      register: 'Registrarse',
    });
  }

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

  renderHeader(text, styles) {
    return(
      <Layout.Header style={styles.header}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={styles.menu}
        >
          <Menu.Item style={styles.left}>
            <img src={logo} width="50px" alt="Aerobot"/>
          </Menu.Item>
          <Menu.Item style={styles.left}>
            <div style={styles.company}>{text.app}</div>
          </Menu.Item>
          <Menu.Item style={styles.right} key="/">
            <Link to="/">{text.landing}</Link>
          </Menu.Item>
          <Menu.Item style={styles.right} key="/login">
            <Link to="/login">{text.login}</Link>
          </Menu.Item>
          <Menu.Item style={styles.right} key="/register">
            <Link to="/register">{text.register}</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }

  renderContent(styles) {
    return(
      <Layout.Content style={styles.content}>
        <Switch>
          <Route exact path='/' component={LandingComponent} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/register' component={SignUpComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </Layout.Content>
    );
  }

  renderFooter() {
    return(
      <FooterComponent />
    );
  }

  render() {
    const text = this.createTexts();
    const styles = this.createStyles();
    const header = this.renderHeader(text, styles);
    const content = this.renderContent(styles);
    const footer = this.renderFooter();

    return (
      <BrowserRouter>
        <Layout>
          {header}
          {content}
          {footer}
        </Layout>
      </BrowserRouter>
    );
  }
}
    
export default NavigationComponent;