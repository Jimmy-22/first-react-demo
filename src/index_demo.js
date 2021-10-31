import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import NewList from './demo2/newList'
import Counter from './demo2/counter'
import Demo1 from './demo2/demo1'
import TodoList from './demo1/TodoList'
import HooksDemo from './demo2/hooksDemo'
import 'antd/dist/antd.css';


class Entry extends Component {
render() {
	return (
		<BrowserRouter>
			<div>
				<Route path='/newlist/:id' component={NewList}/>
				<Route path='/counter' component={Counter}/>
				<Route path='/demo1' component={Demo1}/>
				<Route path='/todo' component={TodoList}/>
				<Route path='/todo' component={TodoList}/>
				<Route path='/hooksdemo' component={HooksDemo}/>
			</div>
		</BrowserRouter>
	)
}
}

ReactDom.render(<Entry />, document.getElementById('root'))