'use strict';

// Modules
var chalk = require('chalk');
var table = require('../table');

module.exports = function( client, argv ){

  client.request( 'nodes', function( error, list ){

    if( !list.length ){
      console.log('The cluster hasn\'t got nodes\n');
      return process.exit();
    }

    list.forEach( function( item ){

      if( item.status === 'OFF' ){
        item.status = chalk.bgRed.bold( ' ' + item.status + ' ' );
      }else{
        item.status = ' ' + item.status + ' ';
      }

    });

    console.log( table.ofObjectArray( list ) );
    process.exit();

  });

};
