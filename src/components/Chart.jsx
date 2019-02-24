import React from 'react'
import './Chart.css'
import Tooltip from './Tooltip'

const Chart = props => {
  const { type, hovering, id } = props
  return (
    <div>
      {hovering === true ? <Tooltip id={id} /> : null}
      <p className="chart">This is a {type} Chart</p>
    </div>
  )
}

export default Chart
