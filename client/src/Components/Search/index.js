import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Input, Button} from 'react-materialize';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  state = {
    subject: "",
    startDate: "",
    endDate: "",
    results: [],
    error: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchArticles(this.state.subject, this.state.startDate, this.state.endDate)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      
      this.setState({ results: res.data.response.docs, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));

    this.setState({
      subject: "",
      startDate: "",
      endDate: ""
    });
  };

    render() {
      return (
        <div className="container">
            <h1>Search</h1>
            <Row>
            <Input 
              value={this.state.subject} 
              onChange={this.handleInputChange}
              placeholder="Subject" 
              label="Search"
              name="subject"
              s={6} />
            <Input 
              value={this.state.startDate}
              onChange={this.handleInputChange} 
              placeholder="YYYYMMDD" 
              label="Start Date"
              name="startDate"
              s={6} />
            <Input 
              value={this.state.endDate}
              onChange={this.handleInputChange} 
              placeholder="YYYYMMDD" 
              label="End Date"
              name="endDate"
              s={6} />   
        </Row>
        <Button waves='light' onClick={this.handleFormSubmit}>Search</Button>
        <SearchResults articles={this.state.results}/>
        </div>
      );
    }
  }
  
  export default Search;