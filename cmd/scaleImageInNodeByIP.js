'use strict';

module.exports = function ( client, argv ) {
  client.request('scaleImageInNodeByIP', argv[ 1 ], argv[ 3 ], argv[ 4 ], function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
