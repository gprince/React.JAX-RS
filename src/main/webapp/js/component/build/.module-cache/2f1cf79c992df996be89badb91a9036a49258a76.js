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

      var CommentItem;

      CommentItem = React.createClass( {
        render: function () {

          return (
              React.DOM.li( {id:this.props.id, className:"commentItem"}, 
                React.DOM.input( {type:"hidden", value:this.props.id}),
                React.DOM.h1( {className:"author"}, this.props.author,' (Le ',moment( this.props.date ).format( 'Do MMMM YYYY' ),')'),
                React.DOM.h2( {className:"title"}, this.props.title),
                React.DOM.blockquote(null, React.DOM.p(null, this.props.comment))
              )
              );
        }
      } );

      return CommentItem;
    }
);