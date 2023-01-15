import React from 'react'
import CounterView from './feature/CounterView'
import PostView from './todos/postView'

const mainFile = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterView />
      <PostView />
    </div>
  )
}

export default mainFile
