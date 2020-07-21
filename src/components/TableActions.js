import React from 'react';

import Grid from '../img/grid.svg';
import Arrow from '../img/arrow.svg';
import ArrowWhite from '../img/arrow-white.svg';
import User from '../img/user-dark.svg';
import Hide from '../img/hide.svg';
import Sort from '../img/sorting.png';

const TableActions = () => {
  return (
    <div className='table-actions-container'>
      <div className='table-name'>
        <img src={Grid} width='20' height='20' />
        <h4>Main Table</h4>
        <button>
          <img src={Arrow} width='20' height='20' />
        </button>
      </div>
      <div className='action-buttons'>
        <button className='pill blue'>
          New Item
          <span>
            <img src={ArrowWhite} />
          </span>
        </button>
        <input
          className='pill-input'
          type='text'
          placeholder='Seach / Filter Board'
        />
        <button className='minimal-button'>
          <img src={User} width='25' height='25' />
        </button>
        <button className='minimal-button'>
          <img src={Hide} width='25' height='25' />
        </button>
        <button className='minimal-button'>
          <img src={Sort} width='25' height='25' />
        </button>
      </div>
    </div>
  );
};

export default TableActions;
