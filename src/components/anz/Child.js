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
      var top3 = []
      var grands = []
      const saveClick = this.onClick

      function printChildren(value) {
        let tmp4 = (
          <div className='item' key={value.name} onClick={e => saveClick(value.name, e)}>
            {value.name}
          </div>
        )
        top3.push(tmp4)

        let grandchild = value.children
        if (grandchild && grandchild.length > 0) {
          let sign = arrshow[value.name] ? '+' : '-'
          if (sign) {
            var signbox = (
              <span className='item-relative' key={value.name + '-sign'}>
                {sign}
              </span>
            )
            top3.push(signbox)
          }
          if (arrshow[value.name]) {
            let tmp5 = (
              <Child
                children={grandchild}
                key={value.name + '.children'}
                parentcount={parentcount}
              ></Child>
            )
            grands.push(tmp5)
          }
        }
      }

      children.forEach(printChildren)

      if (grands.length > 0) {
        var grandsFragment = <div className='mysamerow'>{grands}</div>
      }
    }

    return (
      <Fragment>
        <div className={'myrow '}>{top3}</div>
        {grandsFragment}
      </Fragment>
    )
  }
}

export default Child
