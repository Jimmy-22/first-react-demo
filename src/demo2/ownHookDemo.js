import React from 'react'
import useList from './useList'

const OwnHookDemo = () => {
  const {list, deleteIndex} = useList()
  return (
    <div>
      {list ? (<ol>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteIndex(index)}>delete</button>
          </li>
        ))}
      </ol>) : (<h1>加载中...</h1>)}
    </div>
  )
}

export default OwnHookDemo
