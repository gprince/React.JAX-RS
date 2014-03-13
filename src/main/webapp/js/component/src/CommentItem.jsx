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
    [ 'react', 'moment' ],
    function ( React, moment ) {

      'use strict';

      var CommentItem;

      CommentItem = React.createClass( {
        render: function () {

          return (
              <li id={this.props.id} className="commentItem">
                <input type="hidden" value={this.props.id}/>
                <h1 className="author">{this.props.author}{' (Le '}{moment( this.props.date ).format( 'Do MMMM YYYY' )}{')'}</h1>
                <h2 className="title">{this.props.title}</h2>
                <blockquote><p>{this.props.comment}</p></blockquote>
              </li>
              );
        }
      } );

      return CommentItem;
    }
);