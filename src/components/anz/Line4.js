import React, { Component } from 'react'

import './anz.css'

class Line4 extends Component {
  render() {
    const { list, level } = this.props

    const line4 = []

    function printChildren(myitem) {
      // 4th level child
      console.log(level + ' line4-' + myitem)
      const line4item = <li key={'line4-' + myitem}>{myitem}</li>
      line4.push(line4item)
    }

    list && list.forEach(printChildren)
    return (
      <div className='item' key='line4'>
        <ul>{line4}</ul>
      </div>
    )
  }
}

export default Line4
