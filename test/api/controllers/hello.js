/*jslint node:true*/
'use strict';

import  request from 'supertest';
import { app , start, stop } from './../../../server';
import { thinky , r} from '../../../api/services/db';
import should from 'should';
describe('User Controller', function() {

  before('Start server', function (done) {
    thinky.dbReady()
      .then(start())
      .then(done)
      .catch(done);
  });
  after('Close server', function (done){
    stop();
    r.getPoolMaster().drain();
    done();
  });

  describe('Should return the same string as provided', function() {

      it('should return the same text sent', function(done) {
          request(app)
            .get('/hello')
            .query({name:'asfd'})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
              res.body.message.should.equal('asfd');
              done();
            });
        });
    });
    // describe('Should return the same string as provided', function() {
    //
    //     it('should return the same text sent', function(done) {
    //         request(app)
    //           .post('/login')
    //           .send({name:'asfd'})
    //           .expect(200)
    //           .expect('Content-Type', /json/)
    //           .end(function (err, res) {
    //             console.log(err);
    //             done();
    //           });
    //       });
    //   });
});
