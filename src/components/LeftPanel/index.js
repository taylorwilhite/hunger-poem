import React from 'react'

const LeftPanel = (props) => {
  return (
    <div className="leftpanel">
      <div className="left-frag-container">
        {props.fragments ? props.fragments.map(fragment => {
          return (
            fragment.map(fragment => <p className="fragment">{fragment}&nbsp;</p>) 
          )
        }) : ''}
      </div>
    </div>
  )
}

export default LeftPanel