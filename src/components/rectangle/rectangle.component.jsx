import React from 'react'

const Rectangle = ({rectWidth, rectHeight, xPosition, rectColor}) => (
  <rect
    width = {rectWidth}
    height = {rectHeight}
    x = {xPosition}
    fill = {rectColor}
  >
  </rect>
)

export default Rectangle