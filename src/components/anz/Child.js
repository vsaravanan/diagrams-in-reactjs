import React, { Component, Fragment } from 'react'
// import $ from 'jquery'
import parse from 'html-react-parser'

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
    // if (childname === 'Handle') {
    //   debugger
    //   // $('em').html('</em></div><div class="container"><em>')
    // }

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
      /* <span>lvlenline{this.props.level + 1} </span> */

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

      // sign
      // const mysign = addsign(myname)
      // mysign && line2.push(mysign)
    }

    var grandchildindex = 0
    const addGrandChild = mydata => {
      // second level child
      const myname = mydata.name
      const grandchild = mydata.children

      // grandchildren
      // {parse(`
      // <li>Item 1</li>
      // <li>Item 2</li>
      // `)}
      // <div class='break'></div>
      // </div><div class="container">

      // const tmp1 = parse(`      <li>Item 1</li>      `)
      // const tmp1 = parse(`      <\dddddddddd>      `)

      // {parse('</div><div class="container">')}

      if (grandchildindex++ > 1) {
      }

      // const htmlFromCMS = `<li>Item 1</li>`
      // const htmlFromCMS2 = '</span</div><div class="container"><span>'
      // <span dangerouslySetInnerHTML={{ __html: htmlFromCMS2 }} />

      const mygrand = (
        <Fragment>
          <span>lvlgrand{this.props.level + 1}</span>
          <Child
            children={grandchild}
            key={myname + '-child'}
            show={arrshow[myname]}
            level={this.props.level + 1}
          ></Child>
        </Fragment>
      )
      grands.push(mygrand)
    }

    const addLine4 = mydata => {
      // second level child
      const myname = mydata.name
      const mynewlist = mydata.list
      if (mynewlist) {
        const my4th = (
          <Line4
            key={myname + '-4th'}
            list={mynewlist}
            show={arrshow[myname]}
            level={this.props.level + 1}
          ></Line4>
        )

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
      const itemfound = Object.values(arrshow).includes(true)
      /* <span>lvlline{this.props.level + 1}</span>  */

      if (leaves.length > 0) {
        var line4
        if (itemfound) {
          line4 = <div className={'myrow '}>{leaves}</div>
        } else {
          line4 = leaves
        }
      }

      var lastline
      if (this.props.level === 2) {
        lastline = (
          <Fragment>
            <div className='mysamerow'>
              <div className='container'>
                {line3}
                {line4}
              </div>
            </div>
          </Fragment>
        )
      } else if (this.props.level === 3) {
        lastline = (
          <Fragment>
            {line3}
            {line4}
          </Fragment>
        )
      } else {
        lastline = (
          <Fragment>
            {line3} {line4}
          </Fragment>
        )
      }
    }

    return (
      <Fragment>
        <div className={'myrow '}>{line2}</div>
        {lastline}
      </Fragment>
    )
  }
}

export default Child
