import { NavLink } from 'react-router-dom';
import '.././index.css';

const Navbar = () => {
  return (
    <nav className='navigation'>
      <li>
        <NavLink to='/'>Logo</NavLink>
      </li>
      <div className='nav-menu'>
        <li>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/articles'>Articles</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
