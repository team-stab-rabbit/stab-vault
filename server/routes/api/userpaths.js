// add a user path to the DB and update it

const express = require('express');

const router = express().Router();

const UserPath = require('../../models/userpath.js');

router.post('/',
  async (req, res) => {
    try {
      const {
        name,
        author,
        description,
        tags,
        likes,
        collections,
        mainPath,
        completed,
      } = req.body;
      const userPathDetails = {};
      if (name) userPathDetails.name = name;
      if (author) userPathDetails.author = author;
      if (description) userPathDetails.description = description;
      if (tags) userPathDetails.tags = tags;
      if (likes) userPathDetails.likes = likes;
      if (collections) userPathDetails.collections = collections;
      if (mainPath) userPathDetails.mainPath = mainPath;
      if (completed) userPathDetails.mainPath = completed;
      const userPath = new UserPath(userPathDetails);
      await userPath.save();
      res.json(userPath);
    } catch (err) {
      console.log(err);
    }
  });
