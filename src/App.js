import React, { Component } from 'react'
import './App.css'

import SVGCanvas from './components/svg-canvas/svg-canvas.component'

class App extends Component {

  constructor() {
    super()

    this.state = {
      svgWidth: 600,
      svgHeight: 600
    }
  }

  render() {

    const {svgWidth, svgHeight} = this.state

    return (
      <div>
        <SVGCanvas 
          SVGWidth = {svgWidth}
          SVGHeight = {svgHeight}
        />
      </div>
    )
  }
}

export default App
