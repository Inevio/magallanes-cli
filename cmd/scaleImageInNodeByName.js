'use strict';

module.exports = function ( client, argv ) {
  client.request('scaleImageInNodeByName', argv[ 2 ], argv[ 4 ], argv[ 5 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
