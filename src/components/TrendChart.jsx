import React from 'react'
import Chart from './Chart'

const TrendChart = props => {
  const { id, hovering } = props
  return (
    <React.Fragment>
      <Chart id={id} type="trend" hovering={hovering} />
    </React.Fragment>
  )
}

export default TrendChart
