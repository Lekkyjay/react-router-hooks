import React from 'react'

const User = ({ match }) => {
  return (
    <div>
      User { match.params.name}
    </div>
  )
}

export default User
