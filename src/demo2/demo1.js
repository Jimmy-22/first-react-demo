import React, { Component } from "react";
// import axios from 'axios'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Demo1 extends Component {
	render() {
		return (
			<Link to='/newlist/123'>
				<Button type="dashed">点我去列表</Button>
			</Link>
		)
	}

	// componentDidMount() {
	// 	const promise = axios.get('xxx')
	// 	promise.then(res => {
	// 		console.log(res)
	// 	})
	// }
}

export default Demo1