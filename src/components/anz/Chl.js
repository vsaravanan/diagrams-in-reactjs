import React, { Component } from 'react'
import { toggle_show } from 'actions/action-show'

import { connect } from 'react-redux'

import './anz.css'

class Chl extends Component {
  state = { show: {} }

  onClick = (childname, e) => {
    console.log(' clicked : ' + childname)
    this.props.toggle_show(childname)
  }

  render() {
    const { mydata, level } = this.props
    const myname = mydata.name
    console.log('chl %i - %s %s', level, myname)
    const saveClick = this.onClick

    const printChildItem = (myname, allowclick) => {
      console.log(level + ' chl-' + myname)
      if (allowclick) {
        const line2child = (
          <div className={'item '} key={myname + 'item'} onClick={e => saveClick(myname, e)}>
            {myname}
          </div>
        )
        return line2child
      } else {
        const line2child = (
          <div className={'item '} key={myname + 'item'}>
            {myname}
          </div>
        )
        return line2child
      }
    }

    const allowclick = mydata.children || mydata.list
    const line2child = printChildItem(myname, allowclick)
    return line2child
  }
}

export default connect(
  null,
  { toggle_show },
)(Chl)
