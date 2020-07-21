import React from 'react';

function CharacterCard({ character }){

  const handleClick = () => {
    console.log('card-clicked!');
  }

  return(
    <div className='character-card' onClick={handleClick}>
      <img alt={character.name} src={character.image} />
      <h2>{ character.name }</h2>
      <p>Species {character.species}</p>
      <p>Status {character.status}</p>
    </div>
  );
}

export default CharacterCard;