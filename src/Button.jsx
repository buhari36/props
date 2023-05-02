import React from 'react'

const Button = ({ title, background }) => {
  return (
   <>
    <button style={{background: background}}>{title && title.name}</button>
    <h3>{title.dass}</h3>
    </>
  )
}

export default Button