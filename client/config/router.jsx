import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from '../views/home-page/index'
// import TopicList from '../views/topic-list/index'
// import TopicDetail from '../views/topic-detail/index'

export default () => [
  <Route path="/" component={HomePage} exact key="home" />,
  // <Route path="/list" component={TopicList} key="list" />,
  // <Route path="/detail" component={TopicDetail} key="detail" />,
]
