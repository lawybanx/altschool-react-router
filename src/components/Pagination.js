import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ users }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const usersPerPage = 15;

  useEffect(() => {
    const endOffset = itemOffset + usersPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / usersPerPage));
  }, [itemOffset, usersPerPage, users]);

  const handlePageClick = event => {
    const newOffset = (event.selected * usersPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className='users-info'>
        {currentItems.map((user, index) => {
          return (
            <li key={index} className='user-info'>
              <img src={user.picture.large} alt={user.name.first} />
              <p>
                {user.name.first} {user.name.last}
              </p>
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
