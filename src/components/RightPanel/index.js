import React from 'react'
import ClickableFragment from '../ClickableFragment'
import LineTo from 'react-lineto'

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
      {props.lines ? props.lines.map((line, i) => {
        const prefix='fragment-'
        const below = line.from < line.to
        return(
          <LineTo
            borderColor="#FF4136"
            borderWidth={1}
            zIndex={-1}
            from={prefix + line.from}
            to={prefix + line.to}
            fromAnchor={(below ? 'bottom' : 'top') + ' center'}
            toAnchor={(below ? 'top' : 'bottom') + ' center'}
          />
        )
      }) : ''}
    </div>
  )
}

export default RightPanel