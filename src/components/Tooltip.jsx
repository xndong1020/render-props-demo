import React from 'react'
import './Tooltip.css'

const Tooltip = ({ id }) => {
  return (
    <div className="toolTip">
      <p>This is Tooltip for id {id}</p>
    </div>
  )
}

export default Tooltip
