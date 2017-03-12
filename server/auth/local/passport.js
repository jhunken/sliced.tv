import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

function localAuthenticate(User, email, password, done) {
  User.findOne({
    email: email.toLowerCase()
  }).exec()
    .then(user => {
      if(!user) {
        done(null, false, {
          message: 'This email is not registered.'
        });
        return null;
      }
      user.authenticate(password, function(authError, authenticated) {
        if(authError) {
          return done(authError);
        }
        if(!authenticated) {
          done(null, false, {message: 'This password is not correct.'});
          return null;
        } else {
          done(null, user);
          return null;
        }
      });
    })
    .catch(err => {
      done(err);
      return err;
    });
}

export function setup(User/*, config*/) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  }, function(email, password, done) {
    return localAuthenticate(User, email, password, done);
  }));
}
