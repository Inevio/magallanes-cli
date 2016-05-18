'use strict';

module.exports = function ( client, argv ) {
  client.request('updateImagesOfAllNodes', argv[ 1 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
