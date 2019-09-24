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
    this.setState({ arrshow, clicked: childname })
    // var list = this.props.list
    // if (childname === 'Handle') {
    //   debugger
    // }
    // list &&
    //   list.map(v => {
    //     console.log('list from click ' + v)
    //     return null
    //   })
  }

  render() {
    const children = this.props.children
    const clicked = this.state.clicked

    // const list = children.filter(f => f.name === clicked)
    const parentcount = this.props.parentcount
    // console.log('parentcount ' + parentcount)
    const arrshow = this.state.arrshow
    const divshow = this.props.show

    const dummy = (
      <div className='item '>
        <p>Facility 1</p>
        <p>Facility 2</p>
        <p>Facility 3</p>
        <p>Security 1</p>
      </div>
    )

    // const filler = (
    //   <div className='fillergroup '>
    //     <div className='filler '></div>
    //   </div>
    // )

    // if (clicked) {
    //   let clonearr = children.slice(0)
    //   let findlist = clonearr.pop()
    //   var list = findlist && findlist.list
    // }
    var list
    if (clicked === 'Handle') {
      debugger
      // return 'Welcome'
    }
    if (list && list.length > 0) {
      // const leaf = []
      // const mylist = list
      // if (mylist && mylist.length > 0) {
      //   mylist.map((v, i) => leaf.push(<p key={'p-' + i}>{v}</p>))
      //   var leafpage = (
      //     <div className={'myrow '} key={'leafrow'}>
      //       <div className={'item '} key={'leafitem'}>
      //         {leaf}
      //       </div>
      //     </div>
      //   )
      //   return leafpage
      // }
    } else if (children.length > 0) {
      var line2 = []
      const grands = []
      const leaves = []
      const saveClick = this.onClick

      // it is to hide but fill the space
      if (!divshow) {
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

      function printChildren(value) {
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

          // var list

          const listfiltered = children.filter(f => f.name === myname)
          if (listfiltered) {
            var list = listfiltered && listfiltered.list
            // var clonearr = grandchild.slice(0)
            // var findlist = clonearr.pop()
            // var list = findlist && findlist.list
          }

          const mygrand = (
            <Child
              children={grandchild}
              key={myname + '-child'}
              parentcount={children.length}
              list={list}
              show={arrshow[myname]}
            ></Child>
          )
          grands.push(mygrand)

          // if (list) {
          //   debugger
          //   const my4th = (
          //     <Line4
          //       children={grandchild}
          //       key={myname + '-4th'}
          //       parentcount={children.length}
          //       list={list}
          //       show={true}
          //     ></Line4>
          //   )

          //   grands.push(my4th)
          // }
        } else {
          const mynewlist = value.list
          if (mynewlist) {
            // grands.push(dummy)

            const my4th = (
              <Line4
                children={grandchild}
                key={myname + '-4th'}
                list={mynewlist}
                show={arrshow[myname]}
              ></Line4>
            )

            leaves.push(my4th)
          }
        }
      }

      children.forEach(printChildren)

      if (grands.length > 0) {
        // grands.push(dummy)
        // var line3 = <div className={'mysamerow '}>{grands}</div>
        var line3 = grands
      } else if (leaves.length > 0) {
        var line4 = <div className={'myrow '}>{leaves}</div>
      }
    }
    // if (leafpage) {
    //   return (
    //     <Fragment>
    //       <div className={'myrow '}>{leafpage}</div>
    //     </Fragment>
    //   )
    // } else {
    return (
      <Fragment>
        <div className={'myrow '}>{line2}</div>
        {line3}
        {line4}
      </Fragment>
    )
    // }
  }
}

export default Child
