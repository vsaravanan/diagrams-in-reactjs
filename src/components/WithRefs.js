import React from 'react'

// using refs
export default class WithRefs extends React.Component {
  constructor() {
    super()
    this.state = { sayings: '' }
  }
  update() {
    this.setState({ sayings: this.refs.anything.value })
  }
  render() {
    return (
      <div>
        Mukul Says <input type='text' ref='anything' onChange={this.update.bind(this)} />
        <br />
        <em>{this.state.sayings}</em>
      </div>
    )
  }
}
