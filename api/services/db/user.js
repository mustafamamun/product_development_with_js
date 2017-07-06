/*jslint node:true*/
'use strict';

import { thinky, r, type } from './thinky';

export const User = thinky.createModel("User", {
    email : type.string().required(),
    login : type.string().required(),
    password: type.string().required(),
    registrationDate : type.string().default(r.now())
});
