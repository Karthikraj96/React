import React from 'react';
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) =>(number <= 999 ? `00${number}`.slice(-3) : number);

class pokeCard extends React.Component{
    render()
    {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="pokecard">
                <h1 className="pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="pokecard-data">Type : {this.props.type}</div>
                <div className="pokecard-data">Experience : {this.props.exp}</div>
            </div>
        )
    }
}

export default pokeCard;
