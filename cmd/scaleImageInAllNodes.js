'use strict';

module.exports = function ( client, argv ) {
  client.request('scaleImageInAllNodes', argv[ 2 ], argv[ 3 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
