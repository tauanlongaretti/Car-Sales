import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import { AddFeature } from "../actions/actions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.car.length ? (
        <ol type="1">
          {props.car.map(item => (
            <AdditionalFeature key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {AddFeature}
)(AdditionalFeatures);