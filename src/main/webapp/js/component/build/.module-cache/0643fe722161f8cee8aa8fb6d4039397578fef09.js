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
    [ 'react','script-utils', 'comment' ],
    function ( React, ScriptUtils, Comment ) {

      var CommentForm,
          DEFAULT_STATE = {
            visible: false,
            model: new Comment()
          },
          ATTRIBUTE_NAME_MAP = {
            AUTHOR: 'author',
            TITLE: 'title',
            COMMENT: 'comment',
            decode: function ( name ) {
              switch ( name ) {
                case ATTRIBUTE_NAME_MAP.AUTHOR:
                  return {
                    name: ATTRIBUTE_NAME_MAP.AUTHOR,
                    asState: function ( value ) {
                      return {author: value};
                    }
                  };
                case ATTRIBUTE_NAME_MAP.TITLE:
                  return {
                    name: ATTRIBUTE_NAME_MAP.TITLE,
                    asState: function ( value ) {
                      return {title: value};
                    }
                  };
                case ATTRIBUTE_NAME_MAP.COMMENT:
                  return {
                    name: ATTRIBUTE_NAME_MAP.COMMENT,
                    asState: function ( value ) {
                      return {comment: value};
                    }
                  };
              }
            }
          };

      CommentForm = React.createClass( {

        mixins: [ ScriptUtils.loggable() ],

        clearState: function () {
          this.log( "Clearing State!" );
          this.setState( DEFAULT_STATE );
        },

        getInitialState: function () {
          return DEFAULT_STATE;
        },

        handleOnChange: function ( event ) {

          var attribute, value;

          event.preventDefault();
          event.stopPropagation();



          attribute = ATTRIBUTE_NAME_MAP.decode( event.target.name );
          value = event.target.value;

          this.log( "Changing State: " );

          this.state.model.set( attribute, value );
          this.forceUpdate();
        },

        handleOnSubmit: function ( event ) {

          event.preventDefault();
          event.stopPropagation();

          if ( this.isValid() ) {

            this.state.model.date = new Date();
            this.props.onCommentSubmit( this.state.model );

            this.clearState();
          }

          // TODO

          return false;
        },

        handlePlusOnClick: function ( event ) {

          event.preventDefault();
          event.stopPropagation();

          this.setState( {visible: true} );
        },

        isValid: function () {

         if ( ScriptUtils.isNotBlank( this.state.model.author ) &&
              ScriptUtils.isNotBlank( this.state.model.title ) &&
              ScriptUtils.isNotBlank( this.state.model.comment ) ) {
           return true;
         }

          // TODO gestion des erreurs de formulaire

          return false;
        },

        render: function () {

          if ( this.state.visible ) {

            return (
                React.DOM.form( {className:"commentForm", onSubmit:this.handleOnSubmit}, 
                  React.DOM.input( {type:"text", name:"author", value:this.state.model.author, onChange:this.handleOnChange, placeholder:"Votre nom"} ),
                  React.DOM.input( {type:"text", name:"title", value:this.state.model.title, onChange:this.handleOnChange, className:"comment-title", placeholder:"Votre titre"} ),
                  React.DOM.textarea( {name:"comment", value:this.state.model.comment, onChange:this.handleOnChange, placeholder:"Votre commentaire..."} ),
                  React.DOM.input( {type:"submit", className:"btn btn-envoyer", value:"Envoyer"} )
                )
                );
          }
          else {
            return (
                React.DOM.button( {className:"btn btn-plus", onClick:this.handlePlusOnClick}, "Commenter...")
                );
          }
        }
      } );

      return CommentForm;
    } );