/**
 * @jsx React.DOM
 */

/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global define*/

define(
    [ 'react', 'component/build/CommentItem' ],
    function ( React, CommentItem ) {

      'use strict';

      var CommentList;

      CommentList = React.createClass( {
        render: function () {

          var commentList;

          commentList = this.props.commentList.map(
              function ( comment ) {
                return (
                    <CommentItem id={comment.get( 'id' )}
                                 author={comment.get( 'author' )}
                                 title={comment.get( 'title' )}
                                 comment={comment.get( 'comment' )}
                                 date={comment.get( 'date' )} />
                    );
              }
          );

          return (
              <ul className="commentList">
              {commentList}
              </ul>
              );
        }
      } );

      return CommentList;
    }
);