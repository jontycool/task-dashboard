import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Header from './Header';
import TableActions from './TableActions';
import TableComponent from './TableComponent';

// All Image/Logo imports go here:
import Logo from '../img/logo.svg';
import Notification from '../img/notification.svg';
import Download from '../img/download.svg';
import Calendar from '../img/calendar.svg';
import AddUser from '../img/add-user.svg';
import Search from '../img/search.svg';
import SearchDark from '../img/search-black.svg';
import Question from '../img/question.svg';
import User from '../img/user.svg';
import HomeIcon from '../img/home.svg';
import Plus from '../img/plus.svg';
import Arrow from '../img/arrow.svg';
import AppleLogo from '../img/apple-logo.svg';
import GoogleLogo from '../img/google-play.svg';
import Group from '../img/group.svg';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className='sidebar'>
          <div className='top-logo'>
            <a href='#top' className='main-logo'>
              <img src={Logo} width='30' height='30' />
            </a>
            <a href='javascript:void(0)'>
              <img src={Notification} width='20' height='20' />
            </a>
            <a href='javascript:void(0)'>
              <img src={Download} width='20' height='20' />
            </a>
          </div>
          <div className='bottom-logo'>
            <a href='javascript:void(0)'>
              <img src={Calendar} width='20' height='20' />
            </a>
            <a href='javascript:void(0)'>
              <img src={AddUser} width='20' height='20' />
            </a>
            <a href='javascript:void(0)'>
              <img src={Search} width='20' height='20' />
            </a>
            <a href='javascript:void(0)'>
              <img src={Question} width='20' height='20' />
            </a>
            <a href='javascript:void(0)' className='user-logo'>
              <img src={User} width='30' height='30' />
            </a>
          </div>
        </div>
        <div className='collapsible-sidebar'>
          <div className='sidebar-header'>
            <h3>Workspaces</h3>
            <div className='filter-search'>
              <span>
                <img src={SearchDark} width='12' height='12' />
              </span>
              <input type='text' placeholder='Filter boards...' />
            </div>
            <Collapsible
              open
              trigger={
                <div className='project'>
                  <div className='project-name'>
                    <img src={Arrow} width='10' height='10' />
                    <div className='home-icon'>
                      <img src={HomeIcon} width='12' height='12' />
                    </div>
                    <h3>Main</h3>
                  </div>
                  <a href='www.google.com' target='_blank'>
                    <img src={Plus} width='20' height='20' />
                  </a>
                </div>
              }
            >
              <div className='workspace-list'>
                <button className='workspace-button active'>
                  My Workspace
                </button>
                <button className='workspace-button'>Workspace2</button>
              </div>
            </Collapsible>
          </div>
          <div>
            <div className='dashboards'>
              <h4>Dashboards</h4>
            </div>
            <div className='mobile-app'>
              <h6>Get the Mobile App</h6>
              <a href='https://play.google.com/store?hl=en_IN' target='_blank'>
                <img src={GoogleLogo} width='18' height='18' />
              </a>
              <a href='https://www.apple.com/in/ios/app-store/' target='_blank'>
                <img src={AppleLogo} width='18' height='18' />
              </a>
            </div>
          </div>
        </div>
        <div className='main-content'>
          <Header />
          <TableActions />
          <TableComponent />
          <div className='bottom'>
            <img src={Group} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
