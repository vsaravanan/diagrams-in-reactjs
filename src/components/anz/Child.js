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

    const addsign = item => {
      const sign = arrshow[item] ? '-' : '+'
      if (sign) {
        const signbox = (
          <span className={'item-relative '} key={item + '-sign'}>
            {sign}
          </span>
        )
        return signbox
      }
    }

    const printFiller = i => {
      const line2filler = []
      for (var j = 0; j < i; j++) {
        line2filler.push(<div className='filler ' key={'emptyitem-' + j}></div>)
      }

      const encloseline2 = (
        <div className='fillergroup ' key={'emptygroup'}>
          {line2filler}
        </div>
      )
      return encloseline2
    }

    const printChildItem = myname => {
      const line2child = (
        <div className={'item '} key={myname} onClick={e => saveClick(myname, e)}>
          {myname}
        </div>
      )
      return line2child
    }

    const pushChildItem = mydata => {
      // second level child
      const myname = mydata.name
      const line2childs = printChildItem(myname)
      line2childs && line2.push(line2childs)
    }

    const addGrandChild = mydata => {
      // second level child
      const myname = mydata.name
      const grandchild = mydata.children

      // sign
      const mysign = addsign(myname)
      mysign && line2.push(mysign)

      // grandchildren

      const mygrand = (
        <Child children={grandchild} key={myname + '-child'} show={arrshow[myname]}></Child>
      )
      grands.push(mygrand)
    }

    const addLine4 = mydata => {
      // second level child
      const myname = mydata.name
      const mynewlist = mydata.list
      if (mynewlist) {
        const my4th = <Line4 key={myname + '-4th'} list={mynewlist} show={arrshow[myname]}></Line4>

        leaves.push(my4th)
      }
    }

    if (children.length > 0) {
      var line2 = []

      // it is to hide but fill the space
      if (!shownextline) {
        return printFiller(children.length)
      }

      children.forEach(pushChildItem)

      children.filter(f => f.children && f.children.length > 0).forEach(addGrandChild)

      if (grands.length > 0) {
        var line3 = grands
      }

      children.filter(f => f.list).forEach(addLine4)

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
