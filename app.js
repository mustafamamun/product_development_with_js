/*jslint node: true */
'use strict';
import { thinky } from './api/services/db';
import server from './server';
import { logger } from './api/services/util';

thinky.dbReady()
.then(server.start)
.then(()=>{
	console.log('server started');
})
.catch(function(error){
	console.log(error);
	process.exit(1);
});

process.on('uncaughtException', err=>logger.error('uncaught exception', err));
process.on('unhandledRejection', err=>logger.error('unhandled rejection', err));
