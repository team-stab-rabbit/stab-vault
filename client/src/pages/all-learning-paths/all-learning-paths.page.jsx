import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LearningPath from '../../components/learning-paths/learning-path/learning-path.component';

const AllLearningPaths = ({ loggedInUser, userPaths }) => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { userId } = useParams();

  // transform likes to number
  const transformLikes = (lPaths) =>
    lPaths.map((learningPath) => ({
      ...learningPath,
      likes: learningPath.likes.length,
    }));

  const sortByLikes = (a, b) => {
    if (a.likes > b.likes) {
      return -1;
    }
    if (a.likes === b.likes) {
      return 0;
    }
    return 1;
  };

  useEffect(() => {
    // Check if we are trying to get all learning paths for a specific user
    if (userPaths) {
      fetch(`/api/userpaths/${userId}`)
        .then((res) => res.json())
        .then((result) => {
          setLearningPaths(transformLikes(result));
        });

      return;
    }
    // Otherwise just get all learning paths
    fetch('/api/userpaths')
      .then((res) => res.json())
      .then((result) => {
        // assume result is an array
        // transformLikes -> sort by like by default
        setLearningPaths(transformLikes(result));
      });
  }, [userId]);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    const text = e.target.value.toLowerCase();
    setSearchText(text);
  };

  const handleFilterChange = (e) => {
    const learningPathsCopy = [...learningPaths];
    switch (e.target.value) {
      case 'saved':
        // TODO: decide what to do with "saved" filter
        break;
      default:
        setLearningPaths(learningPathsCopy.sort(sortByLikes));
    }
  };

  const learningPathsToRender = learningPaths.filter((collection) => {
    if (collection.tags.length > 0) {
      for (let i = 0; i < collection.tags.length; i += 1) {
        if (collection.tags[i].toLowerCase().includes(searchText)) {
          return true;
        }
      }
    }
    return collection.description.toLowerCase().includes(searchText);
  });

  return (
    <div>
      <h1>{userPaths ? `${userId}'s Learning Paths` : 'All Learning Paths'}</h1>

      <div>
        <label htmlFor="search-input">
          <span>Search</span>
          <input id="search-input" type="text" onChange={handleSearchChange} />
        </label>
        <label htmlFor="filter-select">
          <span>Filter by:</span>
          <select name="filter" id="filter-select" onChange={handleFilterChange}>
            <option value="likes">Likes</option>
            <option value="saved">Saved</option>
          </select>
        </label>
        <label htmlFor="sort-select">
          <span>Sort by:</span>
          <select name="sort" id="sort-select">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>

      {learningPathsToRender[0] !== undefined ? (
        learningPathsToRender.map((learningPath) => (
          <LearningPath
            key={learningPath._id}
            id={learningPath._id}
            title={learningPath.name}
            description={learningPath.description}
            author={learningPath.author}
            loggedInUser={loggedInUser}
          />
        ))
      ) : (
        <li> Loading...</li>
      )}
    </div>
  );
};

export default AllLearningPaths;
