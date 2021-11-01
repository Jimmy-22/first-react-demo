import React, { Component, Fragment } from 'react'
import logo from './a.png'
import './style.css'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import axios from "axios";
import { Link } from 'react-router-dom'

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  getMenuItems() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={ <MailOutlined /> }>
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  componentDidMount() {
    axios.get('https://www.fastmock.site/mock/cdd3470ae903119676ffb452718b9ed7/api/menus').then(res => {
      this.setState({
        list: res.data.data
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Link to="/">
          <img src={logo} className="app-header-logo" alt="logo" />
        </Link>
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
