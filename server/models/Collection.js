const mongoose = require('mongoose');

const { Schema } = mongoose;

/* ================== Collection Schema ==================
  author: {},       // The creator of the collection - references user table
  title: {},        // The title of the collection - string
  description: {},  // The description of the collection - string
  private: {},      // Whether the collection is private or public - boolean
  contributors: [], // Contributors with edit access - array references users table
  text: {},         // The content of the collection - string
  links: [],        // Links in the collection - array of strings
  likes: [],        // Likes on the collection - array of users - references users table
  category: {},     // Category of the collection - String
  tags: [],         // Tags on a collection - Array of Strings
  updated: {}       // The last date the collection was updated - default date.now when saved
  ========================================================
*/

const CollectionSchema = new Schema({
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users',
  // },
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  hidden: { type: Boolean, required: true },
  contributors: [{ type: String }],
  // contributors: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //     },
  //   },
  // ],
  text: {
    type: String,
  },
  links: [{ type: String }],
  // likes: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users',
  //     },
  //   },
  // ],
  likes: [{ type: String }],
  category: {
    type: String,
  },
  tags: [{ type: String }],
  updated: {
    type: Date,
    default: Date.now,
  },
});

const Collection = mongoose.model('collection', CollectionSchema);

module.exports = Collection;
