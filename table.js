'use strict';

// Modules
var table = require('table');

// Variables
var createTable = table.default;
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

module.exports = {

  ofArray : function( data ){
    return createTable( data, tableConfig );
  },

  ofObjectArray : function( data ){

    var res  = [];
    var keys = Object.keys( data[ 0 ] );
    var tmp  = [];

    res.push( keys.map( item => item.toUpperCase() ) );

    data.forEach( function( item ){

      keys.forEach( function( key ){
        tmp.push( item[ key ] );
      });

      res.push( tmp );
      tmp = [];

    });

    return createTable( res, tableConfig );
  }

}
