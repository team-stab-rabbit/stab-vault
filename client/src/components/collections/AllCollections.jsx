import React, { useState, useEffect } from 'react';

import Collection from './Collection';

const AllCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('/api/collections')
      .then((res) => res.json())
      .then((result) => {
        setCollections(result);
        console.log('collections===', result);
      });
  }, []);

  return (

    <div>

      {collections[0] !== undefined
        ? (
          collections.map((collection) => (

            <Collection
              key={collection._id}
              id={collection._id}
              title={collection.title}
              description={collection.description}
              author={collection.author}
            />

          ))) : <li> Loading...</li>}

    </div>

  );
};

export default AllCollections;
