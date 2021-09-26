import React, { Component, Fragment } from "react";
import Child from "./child";

class Counter extends Component {

  constructor(props) {
    super(props)
    this.doClick = this.doClick.bind(this)
    this.state = {
      counter: 1
    }
  }

  doClick() {
    // console.log(this.childElem)
    // console.log(this.buttonElem.clientTop)
    const newCount = this.state.counter + 1
    //setState是异步的
    this.setState({
      counter: newCount
    })
  }

  render() {
    // console.log('go')
    //1组件创建时候render会执行一次 2.当state发生变更的时候，render函数会重新执行 3.当props数据变更的时候，render也会重新执行
    //ref写在组件标签上，获取的是组件的js实例。ref写在html标签上，获取的是dom节点
    return (
      <Fragment>
        <button 
          onClick={this.doClick}
          ref={(button) => {this.buttonElem = button}}
        >
            增加
        </button>
        <Child 
          num={this.state.counter} 
          ref={(child) => {this.childElem = child}}
        />
      </Fragment>
    )
  }
}

export default Counter