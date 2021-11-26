import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout } from 'antd'
import AppHeader from "./components/Header";
import PageList from "./containers/PageList";
import Detail from "./containers/Detail";
import OwnHookDemo from "./demo2/ownHookDemo";
import './style.css'

const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1300, height: '100%' }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
            <Switch>
              <Route path='/ownHookDemo' component={OwnHookDemo} />
              <Route path='/detail/:id?' component={Detail} />
              <Route path='/:id?' component={PageList} />
            </Switch>
          </Content>
          <Footer className="footer">@copyrigt ferrtsui 2021</Footer>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
