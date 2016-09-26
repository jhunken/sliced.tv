'use strict';

import mongoose from 'mongoose';

var UpdateSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Update', UpdateSchema);
