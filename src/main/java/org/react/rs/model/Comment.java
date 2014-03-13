package org.react.rs.model;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;

/**
 * Created by gprince on 17/02/14.
 */
@XmlRootElement
@XmlType(propOrder = {"id", "author", "title", "comment", "date"})
public class Comment {


    private Long id;

    private String author;

    private String title;

    private String comment;

    private Date  date;

    @SuppressWarnings("unused")
    public Comment() {
    }

    @SuppressWarnings("unused")
    public Comment(Long id, String author, String title, String comment, Date date) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.comment = comment;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title;}

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getDate() { return date; }

    public void setDate(Date date) { this.date = date; }
}
