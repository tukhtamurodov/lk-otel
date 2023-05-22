import React from 'react'
import './Modal.scss'
function Modal({text , className}) {
  return (
    <div id='modal' className={className}>
      <span></span>
      <p>{text}</p>
    </div>
  )
}

export default Modal