import React from 'react'
// import { Link } from 'react-router-dom'
import Routes from '../config/router'
import 'normalize.css/normalize.css'
import '../styles/index.scss'

export default class App extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <Routes key="router" />
    )
  }
}
