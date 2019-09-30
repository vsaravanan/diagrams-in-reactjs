import React, { Component } from 'react'
import { action_show } from 'actions/action-show'
import { connect } from 'react-redux'
import './anz.css'

class ParentChildComp extends Component {
  constructor(props) {
    super(props)
    this.state = { show: {} }
    const { myname } = props
    console.log('ParentChildComp construction %s', myname)
    const shouldshow = false
    props.action_show(myname, shouldshow)
  }
  componentDidUpdate() {
    const { mydata, myname, show } = this.props
    const showchild = show && show[myname]
    if (!showchild) {
      mydata.children &&
        mydata.children.forEach(inneritem => {
          this.props.action_show(inneritem.name, false)
        })
    }
  }

  render() {
    const { parent, parentChilds, level, myname, show } = this.props
    const htmlshow = show && show[myname] && show[myname] ? ' show ' : ' hide '

    console.log(
      'ParentChildComp join container parent -> mysamerow child %i %s %s',
      level,
      myname,
      htmlshow,
    )

    const joined = (
      <div className={'container '} key={'joincontainer-' + myname + level}>
        {parent}
        <div className={'mysamerow ' + htmlshow} key={'mysamerow-' + myname + level}>
          {parentChilds}
        </div>
      </div>
    )
    return joined
  }
}

const mapStateToProps = state => ({
  show: state.childshow.item,
})

export default connect(
  mapStateToProps,
  { action_show },
)(ParentChildComp)
