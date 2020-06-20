import React from 'react';

const SaveButton = ({ id, loggedInUser }) => {
  function saveButtonClick(eventId, userId) {
    console.log('ID of collection that was saved == ', eventId);
    console.log('ID of user that clicked saved == ', userId);
  }

  return (
    <button label="savebutton" onClick={() => saveButtonClick(id, loggedInUser)} type="button" className="save-button">
      <i className="fa fa-star" />
      &nbsp; Save Collection
    </button>
  );
};

export default SaveButton;
