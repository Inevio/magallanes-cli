'use strict';

module.exports = function( client, argv ){

  client.request( 'addImageToNodeByIP', argv[ 1 ], argv[ 3 ], function( error, res ){

    console.log( error || res );
    console.log('');
    process.exit();

  });

};
