import React, { Component, Fragment } from 'react'
import data from 'components/anz/data'
import { JoinParentChild } from './Util'
import './anz.css'

export default class Diagram extends Component {
  render() {
    var tmp = JoinParentChild(data, 0)
    return (
      <Fragment>
        <div className='mysamerow'>{tmp}</div>
      </Fragment>
    )
  }
}
