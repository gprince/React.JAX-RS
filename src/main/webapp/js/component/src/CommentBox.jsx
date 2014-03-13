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
    [ 'react', 'model/Comment', 'component/build/CommentList', 'component/build/CommentForm' ],
    function ( React, Comment, CommentList, CommentForm ) {

      'use strict';

      var CommentBox;

      CommentBox = React.createClass( {

        handleModelOnChange: function ( commentList ) {
          this.setState( {commentList: commentList} );
        },

        getInitialState: function () {
          return {
            commentList: ( this.props.model && new this.props.model() || {} )
          };
        },

        componentDidMount: function () {
          this.state.commentList.on( 'add', this.handleModelOnChange.bind( this, this.state.commentList ) );
          this.state.commentList.fetch().done( this.handleModelOnChange.bind( this, this.state.commentList ) );
        },

        handleCommentSubmit: function ( comment ) {

          console.log( new Date(), comment );
          this.state.commentList.add( comment );

          // TODO save
        },

        render: function () {
          return (
              <div className="commentBox">
                <CommentList commentList={this.state.commentList} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
              </div>
              );
        }
      } );

      return CommentBox;
    }
);