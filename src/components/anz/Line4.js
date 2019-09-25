import React, { Component } from 'react'

import './anz.css'

class Line4 extends Component {
  render() {
    const list = this.props.list
    const divshow = this.props.show

    const line4 = []

    function printChildren(myitem) {
      // 4th level child
      const line4item = <li key={'line4-' + myitem}>{myitem}</li>
      line4.push(line4item)
    }

    const filler = (
      <div className='fillergroup '>
        <div className='filler '></div>
      </div>
    )

    if (divshow) {
      return (
        <div className='item' key='line4'>
          dummy
        </div>
      )
      // list.forEach(printChildren)
      // return (
      //   <div className='item' key='line4'>
      //     <ul>{line4}</ul>
      //   </div>
      // )
    } else {
      return filler
    }
  }
}

export default Line4
