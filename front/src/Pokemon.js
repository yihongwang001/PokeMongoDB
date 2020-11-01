import React, { useState } from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const [search, setPokemon] = useState("");
  // const [searchPlayer, setPlayer] = useState("");

  const renderPokemon = () => {
    // const teams = props.player.filter((t) => t.name.toLowerCase().startsWith(searchPlayer.toLowerCase())); // returns array of players that match search term
    // console.log(teams);
    // <p>Editing {teams[0].name}'s team:</p>
    // <input type="hidden" name="name" value={teams[0].name} />

    return props.pokemon
      .filter((p) => p.Pokemon && p.Pokemon.toLowerCase().startsWith(search.toLowerCase()))
      .map((p) => (
        <li key={p._id}>
          {p.Pokemon} (#{p._id}) <br/>
          <img src={`./images/${p._id}.png`} 
            alt={`${p.Pokemon} (#${p._id}) Sprite`} 
            title={`${p.Pokemon} (#${p._id})`} /> <br/>
          HP: {p.HP} <br/>
          ATK: {p.Atk} <br/>
          DEF: {p.Def} <br/>
          Special Atk: {p.SpA} <br/>
          Special Defense: {p.SpD} <br/>
          Speed: {p.Spe} <br/>
          Type: {p.Type_1} <br/>
          Type II: {p.Type_2} <br/>
          <form action="/updateTeam" method="post">
            <br/>
            <label htmlFor="position">Choose the position: <br/></label>
            <select name="position" id={`position${p._id}`}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input type="hidden" name="newPokemon" id={`newPokemon${p._id}`} value={`${p._id}`} />
            <br/>
            <button type="submit">Add this pokemon</button>
          </form>
          <br/>
        </li>
      ));
  };

  console.log("rendering Pokemon", search);

  return (
    <div>
      <label htmlFor="search">
        Search for a pokemon to add to your team: {" "}
      <input type="text" value={search} onChange={(evt) => setPokemon(evt.target.value)}/>
      </label>
      <br/>
  
      <ul style={{columns: 3}}>{renderPokemon()}</ul>
    </div>
  );
}

// <label htmlFor="searchPlayer">
//         Enter your username: {" "}
//       <input type="text" value={searchPlayer} onChange={(evt) => setPlayer(evt.target.value)}/>
//       </label>
//       <br/>

Pokemon.propTypes ={
  pokemon: PropTypes.array,
};

export default Pokemon;
