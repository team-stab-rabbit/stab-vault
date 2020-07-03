// add a user path to the DB and update it

const express = require('express');

const router = express.Router();
const UserPath = require('../../models/userpath.js');

router.get('/', async (req, res) => {
  try {
    const allpaths = await UserPath.find({}).exec();
    res.json(allpaths);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Server error: ${e._message}`);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, author, description, tags, likes, collections, mainPath, completed } = req.body;
    const userPathDetails = {};
    if (name) userPathDetails.name = name;
    if (author) userPathDetails.author = author;
    if (description) userPathDetails.description = description;
    if (tags) userPathDetails.tags = tags;
    if (likes) userPathDetails.likes = likes;
    if (collections) userPathDetails.collections = collections;
    if (mainPath) userPathDetails.mainPath = mainPath;
    if (completed) userPathDetails.completed = completed;
    const userPath = new UserPath(userPathDetails);
    await userPath.save();
    res.json(userPath);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Server error: ${err._message}`);
  }
});

module.exports = router;
