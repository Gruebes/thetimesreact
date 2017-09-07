import React, { Component } from 'react'
import { CardPanel } from 'react-materialize';
import API from "../../utils/API";


export default class SearchItem extends Component {

  saveArticle(article) {
    console.log(article);
    
    API.saveArticle(article).then(() => {
      console.log('---------------000---------------------');

    });
  }
   // deleteQuote deletes a quote in the db and then
  // reloads all quotes in our app
  // deleteQuote(id) {
  //   API.deleteQuote(id).then(this.props.getQuotes);
  // }
  render() {
    const {article} = this.props;

    return (
        <li key={article._id} className="list-group-item">
            <CardPanel className="blue-grey lighten-4 black-text">
              <p>{article.headline.main}</p>
              <i
              onClick={() => this.saveArticle(article)}
              // className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              className={"fa fa-star-o"}              
              aria-hidden="true"
            />
            </CardPanel>
        </li>
    )
  }
}
