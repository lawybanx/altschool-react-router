import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 ☹️ Page not Found</h1>
      <p>
        Go back to the <Link to='/'>Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
