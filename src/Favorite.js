import React from 'react';
import CharacterCard from './CharacterCard';

function Favorite(props){

  return (
    <div className = 'favorite-character'>
      <h2>Favorite</h2>
      <CharacterCard character={props.character} />
    </div>
  );
}

export default Favorite;