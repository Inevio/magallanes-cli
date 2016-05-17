'use strict';

module.exports = function( client, argv ){

  client.request( 'removeNodeByName', argv[ 2 ], argv[ 4 ], function ( error, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });

};
