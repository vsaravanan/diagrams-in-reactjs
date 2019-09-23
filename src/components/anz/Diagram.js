import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { action_workflow } from 'actions/action-workflow'
import data from 'components/anz/data'

import './anz.css'
import Child from './Child'

class Diagram extends Component {
  state = {
    children: false,
  }
  componentDidMount() {
    this.props.action_workflow(data)
  }

  onClick = () => {
    this.setState({ children: !this.state.children })
  }

  render() {
    var workflow = this.props.current_workflow
    const children = this.state.children
    if (workflow && workflow.children.length > 0) {
      var sign = children ? '+' : '-'
    }
    var top1
    if (workflow) {
      console.log(workflow.name)

      if (children && workflow.children.length > 0) {
        var top2 = <Child children={workflow.children} parentcount={1}></Child>
      }

      if (sign) {
        var signbox = <span className='item-relative2'> {sign} </span>
      }
      top1 = (
        <div className='container'>
          <div className='myrow'>
            <div className='item' onClick={this.onClick}>
              {workflow.name}
            </div>
            {signbox}
          </div>
          {top2}
        </div>
      )
    }

    return <Fragment>{top1}</Fragment>
  }
}

const mapStateToProps = state => ({
  current_workflow: state.workflow.current,
})

export default connect(
  mapStateToProps,
  { action_workflow },
)(Diagram)
