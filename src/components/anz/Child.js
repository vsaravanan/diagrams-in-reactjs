import React, { Component, Fragment } from 'react'
import Line4 from './Line4'
import './anz.css'

class Child extends Component {
  state = {
    arrshow: {},
  }

  componentDidMount() {
    var children = this.props.children
    var arrshow = this.state.arrshow
    children.map(v => (arrshow[v.name] = false))
    this.setState({ arrshow })
  }

  onClick = (childname, e) => {
    console.log(' clicked : ' + childname)
    var arrshow = this.state.arrshow
    arrshow[childname] = !arrshow[childname]
    this.setState({ arrshow })
    // this.setState({ clicked: childname })
  }

  render() {
    const children = this.props.children
    const arrshow = this.state.arrshow
    const shownextline = this.props.show
    const saveClick = this.onClick
    const grands = []
    const leaves = []

    const printChildren = value => {
      // second level child
      const myname = value.name
      const line2child = (
        <div className={'item '} key={myname} onClick={e => saveClick(myname, e)}>
          {myname}
        </div>
      )
      line2.push(line2child)

      const grandchild = value.children

      if (grandchild && grandchild.length > 0) {
        // sign
        const sign = arrshow[myname] ? '-' : '+'
        if (sign) {
          const signbox = (
            <span className={'item-relative '} key={myname + '-sign'}>
              {sign}
            </span>
          )
          line2.push(signbox)
        }

        // grandchildren

        const mygrand = (
          <Child
            children={grandchild}
            key={myname + '-child'}
            // parentcount={children.length}
            show={arrshow[myname]}
          ></Child>
        )
        grands.push(mygrand)
      }

      const mynewlist = value.list
      if (mynewlist) {
        // grands.push(dummy)

        const my4th = <Line4 key={myname + '-4th'} list={mynewlist} show={arrshow[myname]}></Line4>

        leaves.push(my4th)
      }
    }

    if (children.length > 0) {
      var line2 = []

      // it is to hide but fill the space
      if (!shownextline) {
        const line2child = []
        children.map((v, i) =>
          line2child.push(<div className='filler ' key={'emptyitem' + i}></div>),
        )
        const emptygrands = (
          <div className='fillergroup ' key={'emptygroup'}>
            {line2child}
          </div>
        )
        return emptygrands
      }

      children.filter(f => f.children).forEach(printChildren)
      children.filter(f => f.list).forEach(printChildren)

      if (grands.length > 0) {
        var line3 = grands
      }
      if (leaves.length > 0) {
        var line4 = <div className={'myrow '}>{leaves}</div>
      }
    }

    return (
      <Fragment>
        <div className={'myrow '}>{line2}</div>
        {line3}
        {line4}
      </Fragment>
    )
  }
}

export default Child
