import React, { Component } from 'react';

import pokedexLogo from'./img/pokedex-logo.png';

class Searcher extends Component {

  handleChange = (event) => {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    return (
      <div className="buscador">
      <img className="pokedex" src={pokedexLogo} alt="Logo Pokédex"/>
        <input className="searcher"type="text" placeholder="Introduce aquí el nombre del Pokémon que quieres buscar" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Searcher;
