import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  handleHeaderClicked(word, e) {
    console.log(`${word}${this.renderContent()}`)
  }

  renderContent() {
    const isWelecomePage = true
    const name = 'dogrod'

    return isWelecomePage
      ? `Hello, ${name}'s first react app`
      : `Goodbye ${name}`
  }

  render() {
    const className = 'header'
    return (
      <div className={className}>
        <h2 onClick={this.handleHeaderClicked.bind(this, 'content is: ')}>
          {this.renderContent()}
        </h2>
      </div>
    )
  }
}
