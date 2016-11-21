import app from './';
import mongoose from 'mongoose';

if(process.env.NODE_ENV === 'test') {
  require('./nock.global');
}

after(function(done) {
  app.angularFullstack.on('close', () => done());
  mongoose.connection.close();
  app.angularFullstack.close();
});
