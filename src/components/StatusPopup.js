import React from 'react';

const StatusPopup = ({ statusFunc, id, close }) => {
  return (
    <div className='popup-container'>
      <button
        className='popup-button Working'
        onClick={(event) => {
          statusFunc('Working on it', `${id}`);
          close();
        }}
      >
        Working on it
      </button>
      <button
        className='popup-button Stuck'
        onClick={(event) => {
          statusFunc('Stuck', `${id}`);
          close();
        }}
      >
        Stuck
      </button>
      <button
        className='popup-button Waiting'
        onClick={(event) => {
          statusFunc('Waiting for review', `${id}`);
          close();
        }}
      >
        Waiting for review
      </button>
      <button
        className='popup-button Done'
        onClick={(event) => {
          statusFunc('Done', `${id}`);
          close();
        }}
      >
        Done
      </button>
    </div>
  );
};

export default StatusPopup;
