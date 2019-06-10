import React from 'react'

export default class DemoRef extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.ref2 = React.createRef()
    this.ref3 = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const ref = this.myRef.current
    const ref3 = this.ref3.current
    console.log(ref)
    console.log(ref3)

    this.ref2.current.click()
  }

  render () {
    return (
      <div>
        <span ref={this.myRef}>ref</span>
        <button onClick={this.handleClick}>button</button>
        <br />
        <Children ref={this.ref2} />
        <br />
        <Children2 ref={this.ref3} />
      </div>
    )
  }
}

class Children extends React.Component {
  click () {
    console.log('chilren click')
  }
  render () {
    return (
      <div>children</div>
    )
  }
}

const Children2 = React.forwardRef((props, ref) => (
  <div ref={ref}>children2</div>
))
