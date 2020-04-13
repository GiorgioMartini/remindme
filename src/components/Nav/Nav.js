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
    <ul className="list flex">
      {navItmes.map((item, i) => (
        <li className="pv1  pr4" key={i}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
