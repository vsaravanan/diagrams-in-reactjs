import React, { Component, Fragment } from 'react'

import './anz.css'

class Child extends Component {
  constructor(props) {
    super(props)
    this.elements = new Map()
  }

  state = {
    childarray: {},
  }

  componentDidMount() {
    var children = this.props.children
    var childarray = this.state.childarray
    children.map(v => (childarray[v.name] = false))
    this.setState({ childarray })
    // var elements = this.elements
    children.map(v => {
      console.log(v.name + '  ' + childarray[v.name])
      // elements.set(v.name, null)
      return null
    })
  }

  onClick = (childname, e) => {
    console.log(' childname : ' + childname)
    var children = this.props.children
    var childarray = this.state.childarray
    children.map(v => console.log(v.name + ' before ' + childarray[v.name]))
    childarray[childname] = !childarray[childname]
    this.setState({ childarray })
    children.map(v => console.log(v.name + ' after  ' + childarray[v.name]))

    // this.setState({ mymarginleft: e.target.getBoundingClientRect().left })
    // console.log('mymarginleft ' + this.state.mymarginleft)
    // var elements = this.elements
    // children.map(v => {
    //   let tmp = elements.get(v.name)
    //   console.log(v.name + ' ---------> ' + tmp.getBoundingClientRect().left)
    //   console.log(v.name + ' ---------> ' + tmp.getBoundingClientRect().width)
    //   return null
    // })
  }

  render() {
    var children = this.props.children
    // const parentmargin = this.props.parentmargin
    const childarray = this.state.childarray
    // const elements = this.elements
    // const mymarginleft = this.state.mymarginleft

    if (children.length > 0) {
      console.log(children.length)
      var top3 = []
      var grands = []
      const saveClick = this.onClick

      let grandchildcounts = 0

      function printChildren(value) {
        let tmp4 = (
          <div
            className='item'
            key={value.name}
            // ref={e => {
            //   elements.set(value.name, e)
            // }}
            onClick={e => saveClick(value.name, e)}
          >
            {value.name}
          </div>
        )
        top3.push(tmp4)

        let grandchild = value.children
        if (grandchild && grandchild.length > 0) {
          grandchildcounts += grandchild.length
          console.log(' grandchildcounts ' + grandchildcounts)
          let sign = childarray[value.name] ? '+' : '-'
          if (sign) {
            var signbox = (
              <span className='item-relative' key={value.name + '-sign'}>
                {sign}
              </span>
            )
          }
          top3.push(signbox)
          if (childarray[value.name]) {
            let tmp5 = (
              <Child
                children={grandchild}
                key={value.name + '.children'}
                // parentmargin={mymarginleft}
              ></Child>
            )
            grands.push(tmp5)
          }
        }
      }
      //if (children.length > 0) {
      children.forEach(printChildren)

      var rowsize = grandchildcounts > children.length ? grandchildcounts : children.length
      rowsize = 'row' + rowsize
      console.log('rowsize ' + rowsize + ', grandchildcounts ' + grandchildcounts)

      if (grands.length > 0) {
        var grandsFragment = <div className='mysamerow'>{grands}</div>
      }
      //}
    }

    return (
      // style={{ 'marginLeft': `${parentmargin}px` }}
      <Fragment>
        <div className={'myrow ' + rowsize}>{top3}</div>
        {grandsFragment}
      </Fragment>
    )
  }
}

// const mapStateToProps = state => ({
//   current_workflow: state.workflow.current,
// })

// export default connect(
//   mapStateToProps,
//   { action_workflow },
// )(Child)

export default Child
