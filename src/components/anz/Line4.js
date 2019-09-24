import React, { Component } from 'react'

import './anz.css'

class Line4 extends Component {
  render() {
    const list = this.props.list
    const divshow = this.props.show

    const line4 = []

    function printChildren(myitem) {
      // 4th level child
      const line4item = (
        <div className={'item '} key={'line4-' + myitem}>
          {myitem}
        </div>
      )
      line4.push(line4item)
    }

    const filler = (
      <div className='fillergroup '>
        <div className='filler '></div>
      </div>
    )

    if (divshow) {
      list.forEach(printChildren)
      return line4
    } else {
      return filler
    }
  }
}

export default Line4
