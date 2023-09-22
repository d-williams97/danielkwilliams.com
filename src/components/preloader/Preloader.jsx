import React from 'react';
import "./Preloader.css";
import BeatLoader from 'react-spinners/BeatLoader';

const Preloader = (props) => {
  return (
    props.loading && (
      <div className="preloader">
        <BeatLoader
          color={'#4db5ff'}
          loading={props.loading}
          size={30}
          data-testid="loader"
        />
      </div>
    )
  );
};

export default Preloader;
