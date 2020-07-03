const mongoose = require('mongoose');

const { Schema } = mongoose;

const userPathSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  likes: [{ type: String }],
  collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  // mainPath: {
  //   type: Boolean,
  //   required: false,
  // },
  completed: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model('Userpath', userPathSchema);
