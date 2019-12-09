import React from 'react'
import ClickableFragment from '../ClickableFragment'

const RightPanel = props => {
  return (
    <div className="rightpanel">
      {props.fragments.map((fragment, i) => {
        return(
          <ClickableFragment key={i}
            order={i}
            clickHandle={props.clickHandle}>
              {fragment}
          </ClickableFragment>
        )
      })}
    </div>
  )
}

export default RightPanel