const mongoose = require('mongoose');

const { Schema } = mongoose;

const userPathSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  collections: [{ type: String }],
  mainPath: {
    type: Boolean,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Userpaths', userPathSchema);
