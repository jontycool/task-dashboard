import React from 'react';

const PriorityPopup = ({ priorityFunc, id, close }) => {
  return (
    <div className='popup-container'>
      <button
        className='popup-button Urgent'
        onClick={(event) => {
          priorityFunc('Urgent', `${id}`);
          close();
        }}
      >
        Urgent
      </button>
      <button
        className='popup-button High'
        onClick={(event) => {
          priorityFunc('High', `${id}`);
          close();
        }}
      >
        High
      </button>
      <button
        className='popup-button Medium'
        onClick={(event) => {
          priorityFunc('Medium', `${id}`);
          close();
        }}
      >
        Medium
      </button>
      <button
        className='popup-button Low'
        onClick={(event) => {
          priorityFunc('Low', `${id}`);
          close();
        }}
      >
        Low
      </button>
    </div>
  );
};

export default PriorityPopup;
