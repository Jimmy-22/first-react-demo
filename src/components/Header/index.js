import React, { Component, Fragment } from 'react'
import logo from './a.png'
import './style.css'
import { Menu } from 'antd';
import { MailOutlined, ExclamationCircleOutlined, AppleOutlined } from '@ant-design/icons';
// import axios from "axios";

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, icon: <MailOutlined />, title: '英超'},
        {id: 2, icon: <ExclamationCircleOutlined />, title: '欧冠'},
        {id: 3, icon: <AppleOutlined />, title: '西甲'},
        {id: 4, icon: '', title: '德甲'},
        {id: 5, icon: '', title: '意甲'},
        {id: 6, icon: '', title: '法甲'},
      ]
    }
  }


  getMenuItems() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={ item.icon }>
          {item.title}
        </Menu.Item>
      )
    })
  }

  componentDidMount() {
    // axios.get('http://xxxxx').then(res => {
    //   this.setState({
    //     list: res.data.data
    //   })
    // })
  }

  render() {
    return (
      <Fragment>
        <img src={logo} className="app-header-logo" />
        <Menu
          className="app-header-menu"
          mode="horizontal"
        >
          { this.getMenuItems() }
        </Menu>
      </Fragment>
    )
  }
}

export default AppHeader