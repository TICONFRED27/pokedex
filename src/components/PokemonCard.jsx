import PropTypes from 'prop-types';

function PokemonCard(props) {
  // console.log(props.pokemon);
    
    return (
        <figure>
          {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}/> : <p>???</p> }
          <figcaption>
            {props.pokemon.name ? props.pokemon.name : '???'}
          </figcaption>
          </figure>
    )
}

PokemonCard.propTypes = {
  props: PropTypes.shape({
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string})
  .isRequired
  }).isRequired
  
}

export default PokemonCard
