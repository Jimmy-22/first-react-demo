import React, { Component } from 'react'
import { List, Typography } from 'antd';
import axios from "axios";
import { Link } from 'react-router-dom'

class PageList extends Component {

  componentWillReceiveProps(nextProps) {
    this.getListData(nextProps.match.params.id)
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getListData(id) {
    let url = 'http://www.dell-lee.com/react/api/list.json'
    url = id ? url + '?id=' + id : url
    axios.get(url).then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }

  render() {
    return(
      <List
        style={{background: '#fff'}}
        bordered
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            <Link to={`/detail/${item.id}`}>
              <Typography.Text mark></Typography.Text>
              {item.title}
            </Link>
          </List.Item>
        )}
      />
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getListData(id)
  }
}

export default PageList
