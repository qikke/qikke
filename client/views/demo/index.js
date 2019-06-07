import React from 'react'
// import Context from './context'
import DemoRef from './ref'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DemoRef />
    )
  }
}
