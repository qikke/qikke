import React from 'react'

const demoContext = React.createContext('default')

export default class Context extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <demoContext.Provider value="hello,">
        <Demo2 />
      </demoContext.Provider>
    )
  }
}

function Demo2() {
  return (
    <div>
      <Demo3 />
    </div>
  )
}

class Demo3 extends React.Component {
  // static contextType = demoContext

  render() {
    return (
      <demoContext.Consumer>
        {value => (
          <div>{value}</div>
        )}
      </demoContext.Consumer>
    )
  }
}

// Demo3.contextType = demoContext
