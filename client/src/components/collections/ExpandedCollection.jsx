import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

const ExpandedCollection = ({ loggedInUser }) => {
  const [collection, setCollection] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/collections/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCollection(result);
      });
  }, []);

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
        <LikeButton loggedInUser={loggedInUser} id={id} />
        <SaveButton loggedInUser={loggedInUser} id={id} />
      </div>
    </div>

  );
};

export default ExpandedCollection;
