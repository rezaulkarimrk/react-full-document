import React from 'react'

export default function Child(props) {
    const data="helo this data send from child";
    props.onChildData(data);
  return (
    <div>
      <h2>This is from Child</h2>
      <h2>{props.data}</h2>
    </div>
  )
}
