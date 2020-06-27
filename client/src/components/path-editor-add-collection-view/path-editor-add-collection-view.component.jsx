import React from 'react';
import ExpandedCollectionView from './collection-expand-view/collection-expand-view.component';

const AddCollectionView = () => {
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

  return (
    <div>
      {collections.map(({ title, category, description }) => <ExpandedCollectionView key={title} title={title} category={category} description={description} />)}
    </div>
  );
};

export default AddCollectionView;
