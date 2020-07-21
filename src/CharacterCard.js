import React from 'react';

function CharacterCard({ character, getCharacter }){

  const handleClick = () => {
    getCharacter(character);
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