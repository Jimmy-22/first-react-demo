import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

	constructor(props) {
		super(props)

		this.doChange = this.doChange.bind(this)
		this.doKeyUp = 	this.doKeyUp.bind(this)
		this.doClick = this.doClick.bind(this)

		this.state = {
			inputValue: '',
			list: []
		}
	}

	doChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	doKeyUp(e) {
		if (e.keyCode === 13 && e.target.value !== '') {
			const list = [...this.state.list, this.state.inputValue]
			this.setState({
				list,
				inputValue: ''
			})
		}
 	}

	doClick(index) {
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list
		})
	}

	getLists() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					content={item} 
					key={index}
					index={index}
					deleteFn={this.doClick} 
				/>
			)
		})
	}

	render() {
		//这是js中注释
		return (
			<Fragment>
				{/* JSX中的注释 */}
				<label htmlFor='goinput'>请输入内容：</label>
				<input 
					id='goinput'
					className='input'
					value={this.state.inputValue}
					onChange={this.doChange}
					onKeyUp={this.doKeyUp}
				/>
				<ul>
					{this.getLists()}
				</ul>	
			</Fragment>
		);
	}
}

export default TodoList