import React, { useState, useReducer } from 'react';
import { initialState, carReducer } from "../reducer/reducer";
import AddedFeature from './AddedFeature';

const AddedFeatures = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
