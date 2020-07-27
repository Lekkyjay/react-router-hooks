import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const About = () => {
  const location = useLocation()
  const history = useHistory()
  console.log(location);

  const goBackHandle = () => {
    history.goBack()
  }

  return (
    <div>
      <div>About</div>
      <div>Location: { location.pathname }</div>
      <button onClick={goBackHandle}>Go Back </button>
    </div>
  )
}

export default About
