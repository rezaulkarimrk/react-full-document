import React from 'react'
import PropeTypes from 'prop-types'

const User = (props) => {
  return (
    <>
    <h1>{props.user.id}</h1>
    <h3>{props.user.name}</h3>
      {/* <h1>{props.userName}</h1>
      <h3>{props.userId}</h3> */}
    </>
  )
};

User.propTypes={
    user: PropeTypes.shape({
        id: PropeTypes.number,
        name: PropeTypes.string
    }),
    // user: PropeTypes.object.isRequired
    // userName: PropeTypes.string,
    // userId: PropeTypes.number
}
// User.defaultProps={
//     userName: 'DeafaultName',
//     userId: 0
// }

export default User;
// sortcut add>> rafcp