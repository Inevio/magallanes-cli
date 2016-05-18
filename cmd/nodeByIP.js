'use strict';

// Modules
var chalk = require('chalk');
var table = require('table');

module.exports = function( client, argv ){

  client.request( 'nodeByIP', argv[ 1 ], function( error, item ){

    if( error ){
      console.log( error );
      console.log('');
      return process.exit();
    }

    var res = [];
    var tableConfig = {

      border : table.getBorderCharacters('norc'),
      drawHorizontalLine : function( index, size ){
        return index === 0 || index === 1 || index === size;
      },
      columnDefault : {
        paddingLeft : 2,
        paddingRight : 2
      }

    };

    res.push([ item.name, item.ip, item.status ]);

    item.containers = item.containers.sort( function( a, b ){
      return a.Names[ 0 ] > b.Names[ 0 ];
    });

    item.containers.forEach( function( item ){
      res.push( [ '  ' + item.Names[ 0 ].replace( /^\//, '' ), item.Id.slice( 0, 12 ), item.State === 'running' ? 'ON' : 'OFF' ] );
    });

    res.forEach( function( item ){

      if( item[ 2 ] === 'OFF' ){
        item[ 2 ] = chalk.bgRed.bold( ' ' + item[ 2 ] + ' ' );
      }else{
        item[ 2 ] = ' ' + item[ 2 ] + ' ';
      }

    });

    console.log( table.default( res, tableConfig ) );
    process.exit();

  });

};
