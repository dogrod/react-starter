import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/header.js'
import Content from './components/content/content.js'
import Footer from './components/footer/footer.js'
// import registerServiceWorker from './registerServiceWorker'

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />, 
  document.getElementById('root')
)
// registerServiceWorker()
