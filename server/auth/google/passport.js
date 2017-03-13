import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
const logger = require('../../components/utils').logger;

export function setup(User, config) {
  passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
    function(accessToken, refreshToken, profile, done) {
      return User.findOne({'google.id': profile.id})
        .exec()
        .then(user => {
          if(user) {
            logger.log('debug', 'user found: ', user);
            done(null, user);
            return null;
          }

          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.emails[0].value.split('@')[0],
            provider: 'google',
            google: profile._json
          });
          return user.save()
            .then(savedUser => {
              logger.log('debug', 'saved user %j', savedUser);
              done(null, savedUser);
              return null;
            })
            .catch(err => {
              logger.log('error', err);
              done(err);
              return err;
            });
        })
        .catch(err => done(err));
    }));
}
