import React, { useState, useRef, useEffect } from 'react'

const maxLeft = (width, num) => {
  const panelWidth = (window.innerWidth / 4)
  const maxWidth = (panelWidth - (width + 10))

  return maxWidth
}

const fragStyle = (num, width) => {
  const panelWidth = (window.innerWidth / 4)
  const maxWidth = (panelWidth - (width + 10))
  const odd = (num + 1) % 2 === 0
  const line =  odd ? num - 1 : num
  return {
    top: `${line * 26}px`,
    left: odd ? Math.floor(Math.random() * maxWidth) : panelWidth + Math.floor(Math.random() * maxWidth)
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