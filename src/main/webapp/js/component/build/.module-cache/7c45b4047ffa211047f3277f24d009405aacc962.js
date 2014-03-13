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
    [ 'react','script-utils', 'model/Comment', 'validator/Validator', 'resource/Messages' ],
    function ( React, ScriptUtils, Comment, Validator, Messages ) {

      'use strict';

      var CommentForm,
          DEFAULT_STATE = {
            visible   : false,
            model     : new Comment()
          },
          ATTRIBUTE_NAME_MAP = {
            AUTHOR : 'author',
            TITLE  : 'title',
            COMMENT: 'comment',
            DATE   : 'date',
            decode: function ( name ) {
              switch ( name ) {
                case ATTRIBUTE_NAME_MAP.AUTHOR:
                  return ATTRIBUTE_NAME_MAP.AUTHOR;
                case ATTRIBUTE_NAME_MAP.TITLE:
                  return ATTRIBUTE_NAME_MAP.TITLE;
                case ATTRIBUTE_NAME_MAP.COMMENT:
                  return ATTRIBUTE_NAME_MAP.COMMENT;
                case ATTRIBUTE_NAME_MAP.DATE:
                  return ATTRIBUTE_NAME_MAP.DATE;
              }
            }
          },
          Validators = [
            {
              attribute: ATTRIBUTE_NAME_MAP.AUTHOR,
              type     : Validator.requiredString,
              message  : [ Messages.CommentForm.Author.required, Messages.CommentForm.Author.invalid ]
            },
            {
              attribute: ATTRIBUTE_NAME_MAP.TITLE,
              type     : Validator.requiredString,
              message  : [ Messages.CommentForm.Title.required, Messages.CommentForm.Title.invalid ]
            },
            {
              attribute: ATTRIBUTE_NAME_MAP.COMMENT,
              type     : Validator.requiredString,
              message  : [ Messages.CommentForm.Comment.required, Messages.CommentForm.Comment.invalid ]
            },
          ];

      CommentForm = React.createClass( {

        mixins: [ ScriptUtils.loggable(), Validator ],

        clearState: function () {
          this.log( "Clearing State" );
          this.setState( DEFAULT_STATE );
        },

        getInitialState: function () {
          this.log( "Getting initial State" );
          return DEFAULT_STATE;
        },

        handleOnChange: function ( event ) {

          var attribute, value;

          event.preventDefault();
          event.stopPropagation();

          attribute = ATTRIBUTE_NAME_MAP.decode( event.target.name );
          value = event.target.value;

          this.log( "Changing State: { " + attribute + " -> " + value + " }" );
          this.state.model.set( attribute, value );
        },

        handleOnSubmit: function ( event ) {

          event.preventDefault();
          event.stopPropagation();

          if ( this.isValid() ) {

            this.state.model.set( ATTRIBUTE_NAME_MAP.DATE , new Date() );
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

          var author, title, comment;

          author = this.state.model.get( ATTRIBUTE_NAME_MAP.AUTHOR );
          title = this.state.model.get( ATTRIBUTE_NAME_MAP.TITLE );
          comment = this.state.model.get( ATTRIBUTE_NAME_MAP.COMMENT );

         if ( ScriptUtils.isNotBlank( author ) &&
              ScriptUtils.isNotBlank( title ) &&
              ScriptUtils.isNotBlank( comment ) ) {
           return true;
         }

          // TODO gestion des erreurs de formulaire

          return false;
        },

        render: function () {

          var author, title, comment;

          if ( this.state.visible ) {

            author = this.state.model.get( ATTRIBUTE_NAME_MAP.AUTHOR );
            title = this.state.model.get( ATTRIBUTE_NAME_MAP.TITLE );
            comment = this.state.model.get( ATTRIBUTE_NAME_MAP.COMMENT );

            return (
                React.DOM.form( {className:"commentForm", onSubmit:this.handleOnSubmit}, 
                  React.DOM.input( {type:"text", name:"author", value:author, onChange:this.handleOnChange, placeholder:"Votre nom"} ),
                  React.DOM.input( {type:"text", name:"title", value:title, onChange:this.handleOnChange, className:"comment-title", placeholder:"Votre titre"} ),
                  React.DOM.textarea( {name:"comment", value:comment, onChange:this.handleOnChange, placeholder:"Votre commentaire..."} ),
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