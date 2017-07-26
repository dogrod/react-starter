import React, { Component } from 'react'

export default class LikeButton extends Component {
  constructor() {
    super()

    this.state = {
      isLiked: false,
    }
  }

  handleClickLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return (
      <button onClick={this.handleClickLikeButton.bind(this)}>
        👍
        {this.state.isLiked
          ? 'cancel'
          : 'like'
        }
      </button>
    )
  }
}