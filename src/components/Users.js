import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import Pagination from './Pagination';

const Users = () => {
  const [user, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
      .then(response => response.json())
      .then(data => {
        setUsers({
          data: data.results,
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='spinner' role='status'>
          <Oval
            height={80}
            width={80}
            color='#000'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#333'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <Pagination users={user.data} />
      )}
    </>
  );
};

export default Users;
