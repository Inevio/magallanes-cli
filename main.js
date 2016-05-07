#! /usr/bin/env node

var REGEXP = require('./regexp');
var argv   = process.argv.slice( 2 );
var args   = argv.join(' ');

'use strict'

switch ( true ){

  case REGEXP.nodes.test( args ) : require('./cmd/nodes')( argv ); break;
  case REGEXP.nodeByName.test( args ) : require('./cmd/nodeByName')( argv ); break;
  case REGEXP.nodeByIP.test( args ) : require('./cmd/nodeByIP')( argv ); break;
  case REGEXP.addNode.test( args ) : require('./cmd/addNode')( argv ); break;
  case REGEXP.addNodeWithName.test( args ) : require('./cmd/addNodeWithName')( argv ); break;
  case REGEXP.removeNode.test( args ) : require('./cmd/removeNode')( argv ); break;
  case REGEXP.removeNodeByName.test( args ) : require('./cmd/removeNodeByName')( argv ); break;
  case REGEXP.addImageToAllNodes.test( args ) : require('./cmd/addImageToAllNodes')( argv ); break;
  case REGEXP.removeImageFromAllNodes.test( args ) : require('./cmd/removeImageFromAllNodes')( argv ); break;
  case REGEXP.addImageToNodeByIP.test( args ) : require('./cmd/addImageToNodeByIP')( argv ); break;
  case REGEXP.addImageToNodeByName.test( args ) : require('./cmd/addImageToNodeByName')( argv ); break;
  case REGEXP.removeImageByNodeByIP.test( args ) : require('./cmd/removeImageByNodeByIP')( argv ); break;
  case REGEXP.removeImageByNodeByName.test( args ) : require('./cmd/removeImageByNodeByName')( argv ); break;
  case REGEXP.updateAllImagesOfAllNodes.test( args ) : require('./cmd/updateAllImagesOfAllNodes')( argv ); break;
  case REGEXP.updateImageOfAllNodes.test( args ) : require('./cmd/updateImageOfAllNodes')( argv ); break;
  case REGEXP.updateImageOfNode.test( args ) : require('./cmd/updateImageOfNode')( argv ); break;
  case REGEXP.scaleImageInAllNode.test( args ) : require('./cmd/scaleImageInAllNode')( argv ); break;
  case REGEXP.scaleImageInNodeByIP.test( args ) : require('./cmd/scaleImageInNodeByIP')( argv ); break;
  case REGEXP.scaleImageInNodeByName.test( args ) : require('./cmd/scaleImageInNodeByName')( argv ); break;
  default: require('./cmd/help')( argv );

};
