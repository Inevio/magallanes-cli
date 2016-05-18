'use strict';

module.exports = function( client, args ){

  var ip   = args[ 2 ];
  var name = args[ 4 ];

  client.request( 'addNodeWithName', ip, name, function( error ){
    console.log( error );
    process.exit();
  });

};
