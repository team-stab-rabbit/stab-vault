import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExpandedCollectionView from '../../components/collection-expand-view/collection-expand-view.component';

const AddCollectionView = () => {
  const history = useHistory();

  const [collectionsByCategory, setCollections] = useState(null);

  const putCollectionsInCategories = (collectionsFromDb) => {
    const newCollections = collectionsFromDb.reduce((acc, curCollection) => {
      if (!acc[curCollection.category]) {
        acc[curCollection.category] = [];
      }
      acc[curCollection.category].push(curCollection);
      return acc;
    }, {});

    setCollections(newCollections);
  };

  useEffect(() => {
    fetch('/api/collections')
      .then((result) => result.json())
      .then((result) => {
        // TODO: check result before pushing back to the other page
        const collectionsFromDb = result.map(({ title, description, category }) => ({
          title,
          description,
          category,
        }));
        putCollectionsInCategories(collectionsFromDb);
      });
  }, []);

  const handleNew = () => {
    history.push('/collection-editor');
  };

  const handleCancel = () => {
    // replace url stack's current entry since we cancel
    // so that user's url stack won't get cluttered.
    history.replace('/path-editor');
  };

  // nested loop, optimize later?
  const collectionsRender = collectionsByCategory
    && Object.keys(collectionsByCategory).map((category) => (
      <>
        {category}
        {collectionsByCategory[category].map((collection) => (
          <ExpandedCollectionView
            key={collection.title}
            title={collection.title}
            category={collection.category}
            description={collection.description}
          />
        ))}
      </>
    ));

  return (
    <div>
      {/* {collections.length < 1
        ? 'Loading...'
        : collections.map(({ title, category, description }) => (
            <ExpandedCollectionView key={title} title={title} category={category} description={description} />
          ))} */}
      {collectionsRender}
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
