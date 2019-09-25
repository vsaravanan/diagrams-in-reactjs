import React, { Component } from 'react'

import './anz.css'

class Line4 extends Component {
  render() {
    const list = this.props.list
    const divshow = this.props.show
    const level = this.props.level

    const line4 = []

    function printChildren(myitem) {
      // 4th level child
      console.log(level + ' line4-' + myitem)
      const line4item = <li key={'line4-' + myitem}>{myitem}</li>
      line4.push(line4item)
    }

    const filler = (
      <div className='fillergroup '>
        <div className='filler '></div>
      </div>
    )

    if (divshow) {
      // return (
      //   <div className='item' key='line4'>
      //     dummy
      //   </div>
      // )

      console.log(level + '<<<--- push line4')
      list.forEach(printChildren)
      console.log(level + '       push line4 --->>>')
      return (
        <div className='item' key='line4'>
          <ul>{line4}</ul>
        </div>
      )
    } else {
      console.log(level + ' line4-filler')
      return filler
    }
  }
}

export default Line4
