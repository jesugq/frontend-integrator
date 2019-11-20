import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class SideMenuComponent extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };


  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="profile" />
                <span>Perfil</span>
              </span>
            }
          >
            <Menu.Item key="1">Educación 1</Menu.Item>
            <Menu.Item key="2">Habilidades</Menu.Item>
            <Menu.Item key="3">Experiencia</Menu.Item>
            <Menu.Item key="4">Reconocimientos</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="history" />
                <span>Mis asesorias</span>
              </span>
            }
          >
           
            <Menu.Item key="5">Historial</Menu.Item>
            <Menu.Item key="6">Próximos</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="account-book" />
                <span>Perfil de impuestos</span>
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
                <span>
                    <Icon type="credit-card" />
                    <span>Métodos de pago</span>
                </span>
            }
          >
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideMenuComponent;
//ReactDOM.render(<Sider />, mountNode);