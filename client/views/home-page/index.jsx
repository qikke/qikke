import React from 'react'
import styles from './index.module.scss'
import headImg from '../../assets/img/head.png'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
      topBarClass: styles.navTop,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { scrollTop } = this.state
    const topBarState = {
      init: styles.navTop,
      normal: `${styles.navTop} ${styles.normal}`,
      hidden: `${styles.navTop} ${styles.unpinned}`,
    }
    let topBarClass
    if (scrollTop > window.scrollY) {
      if (window.scrollY !== 0) {
        topBarClass = topBarState.normal
      } else {
        topBarClass = topBarState.init
      }
    } else if (scrollTop < window.scrollY) {
      topBarClass = topBarState.hidden
    }
    this.setState({ topBarClass })
    this.setState({ scrollTop: window.scrollY })
  }

  render() {
    const { topBarClass } = this.state
    return (
      <div className={styles.homeWrap}>
        <header className={topBarClass}>
          <div className={styles.container}>
            <img src={headImg} alt="header" width="72" height="72" />
            <div className={styles.navList}>
              <span className="hand">notes</span>
            </div>
          </div>
        </header>
        <section className={styles.headerImg}>
          <div>
            <h1>Front end developer.</h1>
            <div className={styles.description}>WORKING HARD TO MAKE THE INTERNET AWESOME</div>
          </div>
        </section>
        <section className={styles.homeContent} />
      </div>
    )
  }
}
