// import React from 'react'
import React , { useContext } from "react";
import { ColorModeContext } from './ColorModeContext'

const Toggle = () => {
    const { toggleColorMode} = useContext(ColorModeContext)
  return (
    <div>
      <button onClick={toggleColorMode} >
        Togglree
      </button>
    </div>
  )
}

export default Toggle
