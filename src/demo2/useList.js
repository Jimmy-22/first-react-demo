import React from 'react'
import {useState, useEffect} from 'react'

const useList = () => {
  const [list, setList] = useState()
  useEffect(() => {
    myAjax('/list').then(list => {
      setList(list)
    })
  }, [])
  return {
    list,
    addItem: (name) => {
      setList([...list, { id: Math.random(), name: name }]);
    },
    deleteIndex: index => {
      setList(list.slice(0, index).concat(list.slice(index + 1)))
    }
  }
}

export default useList

function myAjax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id:1, name:'messi'},
        {id:2, name:'neymar'},
        {id:3, name:'vidal'},
        {id:4, name:'ibrahimovic'},
      ])
    },2000)
  })
}
