/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global require*/

define(
    [ 'backbone', 'model/Comment' ],
    function ( Backbone, Comment ) {

      var CommentCollection;

      CommentCollection = Backbone.Collection.extend( {
        url:'/resources/comments',
        model: Comment
      } );

      return CommentCollection;
    }
);