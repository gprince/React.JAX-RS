/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global require*/

// Shim Configuration
require.config( {
  'baseUrl': '/js',
  'paths'  : {
    'jquery'       : 'lib/jquery-2.1.0.min',
    'underscore'   : 'lib/underscore-1.6.0.min',
    'backbone'     : 'lib/backbone-1.1.1.min',
    'react'        : 'lib/react-with-add-ons-0.8.0',
    'moment'       : 'lib/moment-with-langs',
    'script-utils' : 'utils/ScriptUtils'
  },
  'shim'   : {
    'jquery'    : {
      'exports': '$'
    },
    'underscore': {
      'exports': '_'
    }
  }
} );

// Loads routes
require(
    [ 'backbone', 'router/router', 'moment' ],
    function ( Backbone, Router, moment ) {

      moment.lang('fr');

      new Router();
      Backbone.history.start();
    }
);
