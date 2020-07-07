const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedPaths: [{ type: Schema.Types.ObjectId, ref: 'Userpath' }],
  userCreatedPaths: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Userpath',
      required: false,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
