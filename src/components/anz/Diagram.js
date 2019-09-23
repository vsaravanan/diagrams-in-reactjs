import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { action_workflow } from 'actions/action-workflow'
import data from 'components/anz/data'

import './anz.css'
import Child from './Child'

class Diagram extends Component {
  state = {
    showchild: false,
  }
  componentDidMount() {
    this.props.action_workflow(data)
  }

  onClick = () => {
    this.setState({ showchild: !this.state.showchild })
  }

  render() {
    var workflow = this.props.current_workflow
    const showchild = this.state.showchild
    if (workflow && workflow.children.length > 0) {
      var sign = showchild ? '+' : '-'
    }

    if (workflow) {
      console.log(workflow.name)

      var line1 = (
        <div className='item' onClick={this.onClick}>
          {workflow.name}
        </div>
      )

      if (sign) {
        var signbox = <span className='item-relative'> {sign} </span>
      }

      if (showchild && workflow.children.length > 0) {
        var line2 = <Child children={workflow.children} parentcount={1} show={true}></Child>
      }
    }

    return (
      <Fragment>
        <div className='container'>
          <div className='myrow'>
            {line1}
            {signbox}
          </div>
          {line2}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  current_workflow: state.workflow.current,
})

export default connect(
  mapStateToProps,
  { action_workflow },
)(Diagram)
