import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import ExpandedCollectionView from '../../components/collection-expand-view/collection-expand-view.component';

import styles from './path-editor-add-collection.style.css';

const accordionIds = [0,1,2,3,4,5,6,7,8,9,10];

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className={styles.CollectionItem}>
      <motion.header
        className={styles.CollectionHeader}
        initial={false}
        animate={{ backgroundColor: isOpen ? "#3F3D56" : "#3F3D56" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h3>asdasda</h3>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              transition={{ duration: 0.8 }}
              className={styles.CollectionView}
            >
              <p>ayyyyyyy</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const AddCollectionView = () => {
  const history = useHistory();

  const [collectionsByCategory, setCollections] = useState(null);
  const [expanded, setExpanded] = useState(0);

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
        const collectionsFromDb = result.map(({
          _id, title, description, category,
        }) => ({
          _id,
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
      <div key={category}>
        <div className={styles.CategoryText}>{category}</div>
        <hr />
        {collectionsByCategory[category].map((collection) => (
          <div key={collection.title + collection.category} className={styles.CollectionView}>
            <ExpandedCollectionView
              title={collection.title}
              category={collection.category}
              description={collection.description}
              collectionID={collection._id}
            />
          </div>
        ))}
      </div>
    ));

  return (
    <div className={styles.AddCollectionPage}>
      {/* {collections.length < 1
        ? 'Loading...'
        : collections.map(({ title, category, description }) => (
            <ExpandedCollectionView key={title} title={title} category={category} description={description} />
          ))} */}
      {/* {collectionsRender} */}
      {accordionIds.map(i => (
        <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
      ))}
      <div className={styles.AddCollectionButtons}>
        <button className={styles.CancelButton} type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button className={styles.AddButton} type="button" onClick={handleNew}>
          New
        </button>
      </div>
    </div>
  );
};

export default AddCollectionView;
