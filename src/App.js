/* eslint-disable no-unused-expressions */

import React, { Component } from 'react'
import Hover from './components/Hover'
import Info from './components/Info'
import TrendChart from './components/TrendChart'
import DailyChart from './components/DailyChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hover
          render={hovering => <Info hovering={hovering} height="16" id="250" />}
        />
        <Hover
          render={hovering => <TrendChart hovering={hovering} id={110} />}
        />
        <Hover
          render={hovering => <DailyChart hovering={hovering} id={128} />}
        />
      </div>
    )
  }
}

export default App
