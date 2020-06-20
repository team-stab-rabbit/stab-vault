import React from 'react';
import { Link } from 'react-router-dom';

import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

const Collection = ({
  id, title, description, author, loggedInUser,
}) => (

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
      <Link to={`/collections/user/${author}`}>{author}</Link>
      {' '}
      {' '}
    </p>
    <div>
      <Link to={`/collections/${id}`}>View Collection</Link>
    </div>
    <div>
      <LikeButton loggedInUser={loggedInUser} id={id} />
      <SaveButton loggedInUser={loggedInUser} id={id} />
    </div>
  </div>

);

export default Collection;
