import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({
  id, title, description, author,
}) => {
  function likeButtonClick(eventId) {
    console.log('ID of collection that was liked == ', eventId);
  }

  return (

    <div key={id} className="collection-div">
      <h1>
        Title:
        {' '}
        {' '}
        {title}
      </h1>
      <h3>
        Description:
        {' '}
        {' '}
        {description}
      </h3>

      <p>
        Creator:
        {' '}
        {' '}
        {author}
        {' '}
        {' '}
      </p>
      <div>
        <Link to={`/collections/${id}`}>View Collection</Link>
      </div>
      <div>
        <button type="button" onClick={() => likeButtonClick(id)}>Like</button>
      </div>
    </div>

  );
};

export default Collection;
