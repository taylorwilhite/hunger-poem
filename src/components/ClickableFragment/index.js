import React, { useState, useRef, useEffect } from 'react'

const maxLeft = width => {
  const panelWidth = (window.innerWidth / 2)
  const maxWidth = (panelWidth - (width + 10))

  return maxWidth
}

const fragStyle = (num, width) => {
  return {
    top: `${num * 30}px`,
    left: Math.floor(Math.random() * maxLeft(width))
  }
}

const ClickableFragment = props => {
  const [clicked, setClicked] = useState(false);
  const [style, setStyle] = useState({});
  const fragRef = useRef();

  useEffect(() => {
    const width = fragRef.current ? fragRef.current.offsetWidth : 0;
    setStyle(fragStyle(props.order, width))
  }, [props.order])

  const handleClick = (payload) => {
    setClicked(true);
    props.clickHandle(payload, props.order)
  }
  return (
    <p 
      className={'clickable-fragment fragment-' + props.order + (clicked ? ' clicked-fragment' : '')}
      onClick={() => handleClick(props.children)}
      style={style}
      ref={fragRef}>
        {props.children}
    </p>
  )
}

export default ClickableFragment