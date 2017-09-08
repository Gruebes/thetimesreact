import React, { Component } from 'react'
import { CardPanel } from 'react-materialize';
import API from "../../utils/API";
import "./SearchItem.css";

export default class SearchItem extends Component {
  saveArticle(article) {
    console.log(article);
    
    API.saveArticle(article).then(() => {

    });
  }

  deleteArticle(_id) {    
    API.deleteArticle(_id).then(this.props.getArticles);
  }
  
  render() {
    const {article} = this.props;

    if (!article.title) {
      article.title = article.headline.main;
    }

    console.log(article)
    return (
        <li key={article._id} className="list-group-item">
            <CardPanel className="blue-grey lighten-4 black-text">
              <p>{article.title}</p>
              <i
              onClick={() => this.saveArticle(article)}
              // className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              className={"item-buttons fa fa-floppy-o"}              
              aria-hidden="true"
            />
            <i
            onClick={() => this.deleteArticle(article._id)}
            // className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
            className={"item-buttons fa fa-trash"}              
            aria-hidden="true"
          />
            </CardPanel>
        </li>
    )
  }
}
