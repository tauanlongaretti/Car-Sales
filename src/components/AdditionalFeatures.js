import React, { useState, useReducer } from 'react';
import { initialState, carReducer } from "../reducer/reducer";
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.additionalFeatures.length ? (
        <ol type="1">
          {state.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
