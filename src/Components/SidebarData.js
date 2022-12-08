import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoIosHome />,
    cName: 'nav-text'
  },
  {
    title: 'Meditation',
    path: '/',
    icon: <GiIcons.GiMeditation />,
    cName: 'nav-text'
  },
  {
    title: 'Journal',
    path: '/Journal',
    icon: <IoIcons.IoIosJournal />,
    cName: 'nav-text'
  },
  {
    title: 'Game',
    path: '/products',
    icon: <IoIcons.IoLogoGameControllerB />,
    cName: 'nav-text'
  },
  {
    title: 'Sleep',
    path: '/sleep',
    icon:  <IoIcons.IoIosMoon />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <IoIcons.IoMdText />,
    cName: 'nav-text'
  },

];