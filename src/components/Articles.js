import { Link, Outlet } from 'react-router-dom';

const Appliances = () => {
  return (
    <div className='articles'>
      <h1>Articles</h1>
      <ul className='article-list'>
        <li>
          <Link to='article01'>Article 1</Link>
        </li>
        <li>
          <Link to='article02'>Article 2</Link>
        </li>
        <li>
          <Link to='article03'>Article 3</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

export default Appliances;
