import React, { Component } from 'react';

import Plug from '../img/plug.svg';
import Bot from '../img/bot.svg';
import Zoom from '../img/zoom.svg';
import User from '../img/user-dark.svg';
import Users from '../img/users.svg';
import Window from '../img/window.png';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header-name'>
          <div className='board-name'>
            <h1>Web design</h1>
            <button className='star-container'>
              <span className='star'>&#9733;</span>
            </button>
          </div>
          <input type='text' placeholder='Add board description' />
        </div>
        <div className='action-buttons'>
          <button className='header-user-icon'>
            <div>
              <img src={User} width='30' height='30' />
            </div>
            <div>
              <img src={Window} width='20' heigh='20' />
            </div>
          </button>
          <button className='pill'>
            <span>
              <img src={Plug} width='18' height='18' />
            </span>
            <span>/ 0</span>
          </button>
          <button className='pill'>
            <span>
              <img src={Bot} width='18' height='18' />
            </span>
            <span>/ 0</span>
          </button>
          <button className='pill'>
            <span>
              <img src={Zoom} width='20' height='20' />
            </span>
            <span>Start Zoom call</span>
          </button>
          <button className='pill'>
            <span>
              <img src={Users} width='18' height='18' />
            </span>
            <span>/ 1</span>
            <span>Activities / 0</span>
          </button>
          <button className='menu-button'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
