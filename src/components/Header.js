import React, { useState, useReducer } from 'react';
import { initialState, carReducer } from "../reducer/reducer";

const Header = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

export default Header;
