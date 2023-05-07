import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


export default function Header() {
  return (
    <>
<ul className='my-nav navbar bg-dark'>
    <li><Link to='/'>Главная</Link></li>
    <li><Link to='/about'>О нас</Link></li>
    <li><Link to='/menu'>Профессии</Link></li>
    <li><Link to='/form'>Регистрация</Link></li>
</ul>
    </>
  )
}
