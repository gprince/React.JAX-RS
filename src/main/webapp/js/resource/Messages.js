/*jslint         browser:  true,  continue: true,
 devel:  true,   maxerr:   50,    newcap:   true,
 nomen:  true,   plusplus: true,  indent:   2,
 regexp: true,   sloppy:   false, vars:    false,
 white:  true,   maxlen:   80
 */

/*global define*/

define(
    [ 'script-utils' ],
    function ( ScriptUtils ) {

      'use strict';

      return {
        CommentForm: {
          Author : {
            required: "L'auteur du commentaire est obligatoire",
            invalid : "L'auteur du commentaire est invalide"
          },
          Comment: {
            required: "Le commentaire est obligatoire",
            invalid : "Le commentaire est invalide"
          },
          Title  : {
            required: "Le titre du commentaire est obligatoire",
            invalid : "Le titre du commentaire est invalide"
          }
        }
      };
    } );