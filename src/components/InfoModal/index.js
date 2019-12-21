import React from 'react'

const styles = {
  modalOpen: {
    display: 'inline',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    background: 'white',
    top: '0',
    left: '0'
  },
  modalClosed: {
    display: 'none'
  },
}

const InfoModal = props => {
  return (
    <div style={props.isOpen ? styles.modalOpen : styles.modalClosed}>
      {props.children}
    </div>
  )
}

export default InfoModal