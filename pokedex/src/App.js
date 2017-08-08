import React, { Component } from 'react';
import Searcher from './Searcher';
import PokemonList from './PokemonList';

class App extends Component {
  constructor(props){
    super(props);
    const numberOfPokemon = 30;

    const numbers = [...Array(numberOfPokemon).keys()].map(n => n + 1);

    const pokemonInfo = numbers.map(number =>({
        id: number,
        name: ''
      }));
    this.state = {
      pokemonInfo,
      filter: ''
    };
  }

  handleFilterChange(query) {
    this.setState({
      filter: query
    });
  }

  filterPokemon(){
    return this.state.pokemonInfo.filter(
      pokemon => pokemon.name.includes(this.state.filter)
    )
  }

  componentDidMount(){
    const baseURL = 'http://pokeapi.co/api/v2/';
    const pokemonURL = num => `${baseURL}pokemon/${num}/`;

    this.state.pokemonInfo.map( pokemon =>
      fetch(pokemonURL(pokemon.id))
        .then(response =>
          response.json()
        )
        .then(json => {
          const{
            name,
            sprites: {front_default: image},
            types: [{type: {name: type}}],
            weight,
            height,
            abilities: [{ability: {name: abilities}}]

          } = json;

          this.setState((prevState, props) => {
            const pokemonInfo = [...prevState.pokemonInfo];
            pokemonInfo[pokemon.id - 1] = { ...pokemon, name, image, type, weight, height, abilities };
            return {pokemonInfo};
          });
        })
    );
  }

  render() {
    return (
      <div>
        <Searcher onFilterChange={this.handleFilterChange.bind(this)} />
        <PokemonList pokemonInfo={this.filterPokemon()} />
      </div>
    );
  }
}

export default App;
