package org.react.rs.resource;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.react.rs.model.Comment;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by gprince on 17/02/14.
 */
@Path("/")
public class ReactRSResource {

    @GET
    @Path("/comments")
    @Produces({"application/xml", "application/json"})
    public List<Comment> getAllItems() {

        List<Comment> commentList = new ArrayList<>();
        commentList.add(
                new Comment(
                        1L,
                        "Gregory Prince (moi)",
                        "Pourquoi ?",
                        "Incontestablement, Backbone est un Framework qui a le mérite de fournir une ligne directrice " +
                                "et un cadre solide et structuré à votre code JavaScript. Cependant son concept de " +
                                "Vues a un défaut avoué : Contrairement à d’autres, Ember et Angular pour ne citer " +
                                "qu’eux,  il ne fournit qu’un cadre limité et un cycle de vie de base relativement " +
                                "pauvre. Tout le travail de binding de vos données, de création et de destruction " +
                                "des vues (imbriquées ou non) vous est dévolu. Ce qui ne contribue guère à renforcer " +
                                "le principe de séparation des préoccupations et ne facilite pas la construction d’une " +
                                "interface rapide avec une empreinte mémoire métrisée. " +
                                "Je trouve, c’est mon opinion, que nous devons nous soucier et donc coder bien trop de " +
                                "choses qui sont pourtant communes à tous nos développements. C’est souvent une source " +
                                "d’erreurs et de maintenance difficile. C’est pourquoi je suis demandé si une alternative " +
                                "se basant sur Backbone était envisageable.",
                        DateTime.parse("18/02/2014", DateTimeFormat.forPattern("dd/MM/yyyy") ).toDate()
                        ));

        commentList.add(
                new Comment(
                        2L,
                        "Gregory Prince (moi)",
                        "React, c'est quoi ?",
                        "React est une bibliothèque relativement nouvelle proposée par Facebook pour créer des interfaces " +
                                "à l’aide de composants isolés. Ceux-ci sont, à bien des égards, similaires aux directives " +
                                "d’Angular ( http://docs.angularjs.org/guide/directive ) ou composants Web de Polymer " +
                                "( http://www.polymer-project.org/ ). Un composant React est essentiellement un élément " +
                                "DOM personnalisé avec son propre scope. En cela, il n’est donc pas capable d’interagir " +
                                "directement avec les états d'autres parties de votre application, que ce soit avec " +
                                "JavaScript ou via le DOM.",
                        DateTime.parse("18/02/2014", DateTimeFormat.forPattern("dd/MM/yyyy") ).toDate()
                ));

        commentList.add(
                new Comment(
                        3L,
                    "Gregory Prince (moi)",
                    "React, principe...",
                    "React n’est pas un Framework MVW à proprement parler. En fait il n’adresse que la partie VW de la " +
                            "couche présentation puisqu’il n’impose aucune structure pour représenter le modèle. Mais " +
                            "comme pour la majorité des Framework MVW, une vue représente une partie de l'écran qui est " +
                            "géré par un objet de commande dont la responsabilité est de réagir aux entrées utilisateur " +
                            "afin de mettre à jour l’interface en conséquence. Dans React, la combinaison de la vue et " +
                            "de son objet de commande est simplement appelée composant. Ce composant sait comment " +
                            "établir le rendu de sa vue et connait la façon de gérer l'interaction avec l’utilisateur. " +
                            "Là où React change la donne est qu’un composant est capable de trouver par lui-même la " +
                            "façon la plus efficace de mettre à jour cette vue.",
                        DateTime.parse("18/02/2014", DateTimeFormat.forPattern("dd/MM/yyyy") ).toDate()
                ));
        return commentList;
    }
}
