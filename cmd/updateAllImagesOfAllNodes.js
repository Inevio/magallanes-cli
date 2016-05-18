'use strict';

module.exports = function ( client, argv ) {
  client.request('updateAllImagesOfAllNodes', function ( err, res ) {
    console.log( arguments );
    console.log('');
    process.exit();
  });
};
