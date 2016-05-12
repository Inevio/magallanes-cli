#! /usr/bin/env node
'use strict'

// Modules
var vertigo = require('vertigo');

// Create client
var client = vertigo.createClient( 21041 );

// Variables
var REGEXP = require('./regexp');
var argv   = process.argv.slice( 2 );
var args   = argv.join(' ');

console.log('');

switch ( true ){

  case REGEXP.nodes.test( args ) : require('./cmd/nodes')( client, argv ); break;
  case REGEXP.nodeByName.test( args ) : require('./cmd/nodeByName')( client, argv ); break;
  case REGEXP.nodeByIP.test( args ) : require('./cmd/nodeByIP')( client, argv ); break;
  case REGEXP.addNode.test( args ) : require('./cmd/addNode')( client, argv ); break;
  case REGEXP.addNodeWithName.test( args ) : require('./cmd/addNodeWithName')( client, argv ); break;
  case REGEXP.removeNode.test( args ) : require('./cmd/removeNode')( client, argv ); break;
  case REGEXP.removeNodeByName.test( args ) : require('./cmd/removeNodeByName')( client, argv ); break;
  case REGEXP.addImageToAllNodes.test( args ) : require('./cmd/addImageToAllNodes')( client, argv ); break;
  case REGEXP.removeImageFromAllNodes.test( args ) : require('./cmd/removeImageFromAllNodes')( client, argv ); break;
  case REGEXP.addImageToNodeByIP.test( args ) : require('./cmd/addImageToNodeByIP')( client, argv ); break;
  case REGEXP.addImageToNodeByName.test( args ) : require('./cmd/addImageToNodeByName')( client, argv ); break;
  case REGEXP.removeImageByNodeByIP.test( args ) : require('./cmd/removeImageByNodeByIP')( client, argv ); break;
  case REGEXP.removeImageByNodeByName.test( args ) : require('./cmd/removeImageByNodeByName')( client, argv ); break;
  case REGEXP.updateAllImagesOfAllNodes.test( args ) : require('./cmd/updateAllImagesOfAllNodes')( client, argv ); break;
  case REGEXP.updateImageOfAllNodes.test( args ) : require('./cmd/updateImageOfAllNodes')( client, argv ); break;
  case REGEXP.updateImageOfNode.test( args ) : require('./cmd/updateImageOfNode')( client, argv ); break;
  case REGEXP.scaleImageInAllNode.test( args ) : require('./cmd/scaleImageInAllNode')( client, argv ); break;
  case REGEXP.scaleImageInNodeByIP.test( args ) : require('./cmd/scaleImageInNodeByIP')( client, argv ); break;
  case REGEXP.scaleImageInNodeByName.test( args ) : require('./cmd/scaleImageInNodeByName')( client, argv ); break;
  default: require('./cmd/help')( argv );

};
