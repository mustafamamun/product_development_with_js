/*jslint node:true*/
'use strict';

import { User } from '../../services/db';
import { hash } from '../../services/util';



module.exports = {
  register
};
//Controller function
function register(req, res, next) {
  const { login, password, passwordRepeat, email } = req.bpdy;
  if( password!== passwordRepeat){
    return res.status(400).json({error : 'Password does not match'});
  }
  const hashPassword = hash(password);
  const user = new User({
    login,
    password : hashPassword,
    email
  });
  user.save()
  .then((result)=>{ return res.status(201).json( { message : 'User Created'}); })
  .catch((err)=>{ return res.status(500).json({error: 'Internal server error'}); });
}
