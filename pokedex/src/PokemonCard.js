import React, { Component } from 'react';

class PokemonCard extends Component {

  render() {
    return (
      <span className='pokecard'>
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt={this.props.name} />
        <p>Nº: {this.props.id}</p>
        <p>Tipo: {this.props.type}</p>
        <p>Peso: {this.props.weight} | Altura: {this.props.height}</p>
        <p>Habilidades: {this.props.abilities}</p>
      </span>
    );
  }
}

export default PokemonCard;
