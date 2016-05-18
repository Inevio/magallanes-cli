'use strict';

module.exports = function( client, argv ){

  client.request( 'addImageToNodeByName', argv[ 2 ], argv[ 4 ], function( error, res ){

    console.log( error || res );
    console.log('');
    process.exit();

  });

};
