'use strict';

module.exports = function( client, argv ){

  client.request( 'addNode', argv[ 2 ], function ( error, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });

};
