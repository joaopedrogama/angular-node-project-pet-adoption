import { PassportStatic } from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import UserRepository from '../../app/api/users/user.repository';

export default (passport: PassportStatic) => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY || 'jvns',
  },
  (payload: any, done: any) => {
    new UserRepository().findById(payload.id).then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch((err) => {
      return done(err, false);
    })
  }));
};
