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
    {loggedInUser ? (
      <div>
        <br />
        <LikeButton loggedInUser={loggedInUser} id={id} />
        <SaveButton loggedInUser={loggedInUser} id={id} />
      </div>
    ) : (
      <div>
        <br />
        <Link to="/register">Register</Link>
          &nbsp;or&nbsp;
        <Link to="/login">Login</Link>
          &nbsp;to save this collection
      </div>
    )}
  </div>

);

export default Collection;
