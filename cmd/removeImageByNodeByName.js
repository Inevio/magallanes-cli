'use strict';

module.exports = function ( client, argv ) {
  client.request('removeImageByNodeByName', argv[ 2 ], argv[ 4 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
