import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ExpandedCollection = () => {
  const [collection, setCollection] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/collections/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCollection(result);
      });
  }, []);

  function likeButtonClick(eventId) {
    console.log('ID of collection that was liked == ', eventId);
  }

  return (

    <div key={collection._id} className="collection-div">
      <h1>
        Title:
        {' '}
        {' '}
        {collection.title}
      </h1>
      <h3>
        Description:
        {' '}
        {' '}
        {collection.description}
      </h3>

      <p>
        Creator:
        {' '}
        {' '}
        <Link to={`/collections/user/${collection.author}`}>{collection.author}</Link>
        {' '}
        {' '}
      </p>

      <div>
        <button type="button" onClick={() => likeButtonClick(collection._id)}>Like</button>
      </div>
    </div>

  );
};

export default ExpandedCollection;
