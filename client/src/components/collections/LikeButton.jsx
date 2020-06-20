import React from 'react';

const LikeButton = ({ id, loggedInUser }) => {
  function likeButtonClick(eventId, userId) {
    console.log('ID of collection that was liked == ', eventId);
    console.log('ID of user that clicked like == ', userId);
  }

  return (
    <button label="likebutton" onClick={() => likeButtonClick(id, loggedInUser)} type="button" className="like-button">
      <i className="far fa-thumbs-up" />
      Like
    </button>
  );
};

export default LikeButton;
