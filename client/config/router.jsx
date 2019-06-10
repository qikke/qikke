import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from '../containers/home-page/index'
import Demo from '../containers/demo'
import { Notes } from '../containers/notes'

export default () => [
  <Route path="/" component={HomePage} exact key="home" />,
  <Route path="/demo" component={Demo} key="demo" />,
  <Route path="/notes" component={Notes} key="notes" />,
  // <Route path="/detail" component={TopicDetail} key="detail" />,
]
