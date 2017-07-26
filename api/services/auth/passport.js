/*jslint node:true*/
'use strict';
import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import { User } from '../db';
import { hash } from '../util';
passport.serializeUser((user, done)=> { done(null, user.id); });

passport.deserializeUser((id, done)=> {
  User.get(id).run()
  .then(user=> done(null, user))
  .catch(err=>done(err, null));
});
passport.use(new LocalStrategy((login, password, done)=> {
    User.filter({ login }).limit(1).run()
    .then((users)=>{
      const user = users[0];
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== hash(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
}));
