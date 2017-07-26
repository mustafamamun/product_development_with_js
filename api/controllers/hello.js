/*jslint node:true*/
'use strict';

module.exports = {
  hello: hello
};
//Controller function
function hello(req, res, next) {
  console.log('in');
  res.json({message : req.swagger.params.name.value});
}
