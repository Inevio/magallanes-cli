'use strict';

module.exports = function( client, argv ){

  client.request( 'removeNode', argv[ 1 ], argv[ 3 ], function ( error, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });

};
