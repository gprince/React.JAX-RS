/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global require*/

// Routes definitions
define(
    [ 'backbone',
      'react',
      'component/build/CommentBox',
      'collection/CommentCollection' ],
    function ( Backbone, React, CommentBox, CommentCollection ) {
      return Backbone.Router.extend( {
        routes  : {
          '': 'index'
        },
        index: function () {
          React.renderComponent(
              CommentBox( { model: CommentCollection } ),
              document.getElementById( 'comment-container' )
          );
        }
      } );
    }
);
