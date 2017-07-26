import React, { Component } from 'react'
import './content.css'

import LikeButton from '../like-button/like-button'

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <h3>like it?</h3>
        <LikeButton />
      </div>
    )
  }
}