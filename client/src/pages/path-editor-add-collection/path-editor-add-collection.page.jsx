import React from 'react';
import { useHistory } from 'react-router-dom';
import ExpandedCollectionView from '../../components/collection-expand-view/collection-expand-view.component';

const AddCollectionView = () => {
  const history = useHistory();

  const collections = [
    {
      title: 'CSS',
      category: 'Front End',
      description: 'Description of this collection',
    },
    {
      title: 'HTML',
      category: 'Front End',
      description: 'Description of this collection',
    },
    {
      title: 'SASS',
      category: 'Front End',
      description: 'Description of this collection',
    },
  ];

  const handleNew = () => {
    history.push('/collection-editor');
  };

  const handleCancel = () => {
    // replace url stack's current entry since we cancel
    // so that user's url stack won't get cluttered.
    history.replace('/path-editor');
  };

  return (
    <div>
      {collections.map(({ title, category, description }) => (
        <ExpandedCollectionView key={title} title={title} category={category} description={description} />
      ))}
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleNew}>
        New
      </button>
    </div>
  );
};

export default AddCollectionView;
