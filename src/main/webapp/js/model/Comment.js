/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global require*/

define(
    [ 'backbone'],
    function ( Backbone ) {

      var Comment;

      Comment = Backbone.Model.extend( {
        defaults: {
          author : null,
          title  : null,
          comment: null,
          date   : null
        }
      } );

      Comment.make = function ( comment ) {
        return new Comment( comment );
      }

      return Comment;
    }
);