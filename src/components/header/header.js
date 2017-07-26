import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    const isWelecomePage = false
    const className = 'header'
    const name = 'dogrod'
    return (
      <div className={className}>
        {isWelecomePage
          ? <h2>{name}'s first react app</h2>
          : <h2>Goodbye {name}</h2>
        }
      </div>
    )
  }
}
