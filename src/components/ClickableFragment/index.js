import React, { useState } from 'react'

const ClickableFragment = props => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (payload) => {
    setClicked(true);
    props.clickHandle(payload)
  }
  return (
    <p 
      className={'clickable-fragment' + (clicked ? ' clicked-fragment' : '')}
      onClick={() => handleClick(props.children)}>
        {props.children}
    </p>
  )
}

export default ClickableFragment