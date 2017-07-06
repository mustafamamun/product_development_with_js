/*jslint node:true*/
'use strict';

import { thinky, r, type } from './thinky';

export const Question = thinky.createModel("Question", {
    text : type.string().required(),
    creationDate : type.string().default(r.now()),
    expirationDate: type.string().required(),
    answer :type.array().schema(
      type.object().schema({
          user : type.string().required(),
          answer: type.string().required(),
      })
    )
});
