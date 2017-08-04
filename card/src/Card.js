import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="avatar" alt={this.props.imageAlt}/>
        <h1 className="name">{this.props.name}</h1>
        <p className="date">{this.props.date}</p>
        <p className="text">{this.props.text}</p>
        <p className="text">{this.props.text2}</p>
        <img src={this.props.like} className="like" alt={this.props.likeAlt}/>
        <p className="likes">{this.props.likes}</p>
      </div>
    );
  }
}

export default Card;
