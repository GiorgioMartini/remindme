import React from 'react'
import { Link } from 'react-router-dom';
const navItmes = [
  {
    title: 'Home',
    path: '/'
  }
  , {
    title: 'Overview',
    path: '/overview'
  }
]

const Nav = () => {
  return (
    <ul>
      {navItmes.map(item => (
        <li><Link to={item.path}>{item.title}</Link></li>
      ))}
    </ul>
  )
}

export default Nav
