import React from 'react'
import Chart from './Chart'

class DailyChart extends React.Component {
  render() {
    const { id, hovering } = this.props
    return (
      <React.Fragment>
        <Chart id={id} type="daily" hovering={hovering} />
      </React.Fragment>
    )
  }
}

export default DailyChart
