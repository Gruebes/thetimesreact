import React, { Component } from "react";
import { } from 'react-materialize';
import API from "../../utils/API";
import SearchResults from '../SearchResults/SearchResults';


class Saved extends Component {
  state = {
    articles: []
  }
  

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    API.getArticles().then((res) => {      
      this.setState({ articles: res.data });
      console.log(this.state.articles);      
    });
}

  render() {
      return (
        <div className="container">
            <h1>Saved</h1>  
            <SearchResults articles={this.state.articles} getArticles={this.getArticles}/>            
        </div>
      );
    }
  }
  
  export default Saved;