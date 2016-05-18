'use strict';

module.exports = function ( client, argv ) {
  client.request('removeImageByNodeByIP', argv[ 1 ], argv[ 3 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
