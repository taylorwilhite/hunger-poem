import React from 'react'

const LeftPanel = (props) => {
  return (
    <div className="leftpanel">
      {props.fragments ? props.fragments.map(fragment => {
        return (
          <p className="fragment">{fragment}&nbsp;</p>
        )
      }) : ''}
    </div>
  )
}

export default LeftPanel