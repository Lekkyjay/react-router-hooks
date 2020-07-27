import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { fname, lname } = useParams()
  
  return (
    <div>
      User { fname } { lname }
    </div>
  )
}

export default User
