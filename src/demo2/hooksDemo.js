//React Hooks API 函数组件
import React, { Component, useState } from "react";

function Child(props) {
  return (
    <>
      <h2>this is a { props.title }  Child Fn</h2>
    </>
  )
}

function HooksDemo() {

  const [title, setTitle] = useState('hahahha')

  return (
    <>
      <h1>this is father Fn</h1>
      <Child title={title} />
      <button onClick={() => setTitle('messi')}>点我变没戏</button>
    </>
  )
}

export default HooksDemo