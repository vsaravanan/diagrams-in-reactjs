import React, { Component, Fragment } from 'react'

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
    console.log(' childname : ' + childname)
    var arrshow = this.state.arrshow
    arrshow[childname] = !arrshow[childname]
    this.setState({ arrshow })
  }

  render() {
    var children = this.props.children
    const parentcount = this.props.parentcount
    console.log('parentcount ' + parentcount)
    const arrshow = this.state.arrshow

    if (children.length > 0) {
      var line2 = []
      const grands = []
      const saveClick = this.onClick

      function printChildren(value) {
        // second level child
        const myname = value.name
        const line2child = (
          <div className='item' key={myname} onClick={e => saveClick(myname, e)}>
            {myname}
          </div>
        )
        line2.push(line2child)

        const grandchild = value.children
        if (grandchild && grandchild.length > 0) {
          // sign
          const sign = arrshow[myname] ? '+' : '-'
          if (sign) {
            const signbox = (
              <span className='item-relative' key={myname + '-sign'}>
                {sign}
              </span>
            )
            line2.push(signbox)
          }

          // grandchildren
          if (arrshow[myname]) {
            const mygrand = (
              <Child
                children={grandchild}
                key={myname + '-child'}
                parentcount={children.length}
              ></Child>
            )
            grands.push(mygrand)
          }
        }
      }

      children.forEach(printChildren)

      if (grands.length > 0) {
        var line3 = <div className='mysamerow'>{grands}</div>
      }
    }

    return (
      <Fragment>
        <div className={'myrow '}>{line2}</div>
        {line3}
      </Fragment>
    )
  }
}

export default Child
