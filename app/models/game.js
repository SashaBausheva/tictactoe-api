const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  cells: {
    type: Array,
    required: true,
    default: new Array('')
  },
  over: {
    type: Boolean,
    required: true,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
