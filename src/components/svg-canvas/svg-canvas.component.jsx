import React, {Component} from 'react'
import * as d3 from 'd3'

import { firestore } from "../../firebase/firebase.util"

import Rectangle from '../rectangle/rectangle.component'

class SVGCanvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  // because d3.json() is a asynchrous task,, it takes sometime to do, it returns a promise => u can use .then() method which fire a callback func when this task is completed

  componentDidMount() {
    const menuRef = firestore.collection('menu')

    let menu = []

    menuRef.get().then(res => {
      res.docs.forEach(doc => {
        menu.push(doc.data())
      })
    })

    this.setState({
      data: menu
    })
  }

  yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500])

  // xScale = d3.scaleBand()
  //   .domain(this.state.data.map(
  //       (item) => item.name
  //     ))
  //   .range([0, 500])
  //   .paddingInner(0.2)
  //   .paddingOuter(0.2)

  render() {

    const {SVGWidth, SVGHeight} = this.props
    const { data } = this.state

    console.log(data)
    console.log(typeof(data))

    return (
      <h1>Testing...</h1>
    )
  }
}

export default SVGCanvas

/*
<svg
  height = {SVGHeight}
  width = {SVGWidth}
>
  {data.map(
    ({id, name, orders}) => (
      <Rectangle 
        key = {id}
        rectHeight = {this.yScale(orders)}
        rectWidth = {125}
        xPosition = {id * 70}
        rectColor = "orange"
      />
    ))}
</svg>
*/ 