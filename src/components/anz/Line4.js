import React, { Component, Fragment } from 'react'

import './anz.css'

class Line4 extends Component {
  // state = {
  //   arrshow: {},
  // }

  componentDidMount() {
    // var children = this.props.children
    // var arrshow = this.state.arrshow
    // children.map(v => (arrshow[v.name] = false))
    // this.setState({ arrshow })
  }

  // onClick = (childname, e) => {
  //   console.log(' childname : ' + childname)
  //   var arrshow = this.state.arrshow
  //   arrshow[childname] = !arrshow[childname]
  //   this.setState({ arrshow, clicked: childname })
  // }
  render() {
    const list = this.props.list
    // const children = this.props.children
    const divshow = this.props.show

    const line4 = []

    function printChildren(myitem) {
      // second level child
      const line4item = (
        <div className={'item '} key={'line4-' + myitem}>
          {myitem}
        </div>
      )
      line4.push(line4item)
    }

    // const dummy = (
    //   <div className='item '>
    //     <p>Dummy 1</p>
    //   </div>
    // )

    const filler = (
      <div className='fillergroup '>
        <div className='filler '></div>
      </div>
    )

    if (divshow) {
      list.forEach(printChildren)
      return line4
    } else {
      return filler
    }

    // if (children.length > 0) {
    //   var line2 = []

    //   if (!divshow) {
    //     const line2child = []
    //     children.map((v, i) =>
    //       line2child.push(<div className='filler ' key={'emptyitem' + i}></div>),
    //     )
    //     const emptygrands = (
    //       <div className='fillergroup ' key={'emptygroup'}>
    //         {line2child}
    //       </div>
    //     )
    //     return emptygrands
    //   }
    // }
  }
}

export default Line4
