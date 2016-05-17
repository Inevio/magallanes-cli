'use strict';

module.exports = function ( client, argv ) {

  client.request('addImageToAllNodes', argv[ 2 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });

};
