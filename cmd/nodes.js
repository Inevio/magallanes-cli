'use strict';

// Modules
var chalk = require('chalk');
var table = require('table');

module.exports = function( client, argv ){

  client.request( 'nodes', function( error, list ){

    if( !list.length ){
      console.log('The cluster hasn\'t got nodes\n');
      return process.exit();
    }

    var res = [];
    var lines = [];
    var tableConfig = {

      border : table.getBorderCharacters('norc'),
      drawHorizontalLine : function( index, size ){
        return index === 0 || lines.indexOf( index ) !== -1 || index === size;
      },
      columnDefault : {
        paddingLeft : 2,
        paddingRight : 2
      }

    };

    list.forEach( function( item ){

      lines.push( res.push([ item.name, item.ip, item.status ]) );

      item.containers = item.containers.sort( function( a, b ){
        return a.Names[ 0 ] > b.Names[ 0 ];
      });

      item.containers.forEach( function( item ){
        res.push( [ '  ' + item.Names[ 0 ].replace( /^\//, '' ), item.Id.slice( 0, 12 ), item.State === 'running' ? 'ON' : 'OFF' ] );
      });

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
