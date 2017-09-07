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
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    API.searchArticles(this.state.subject, this.state.startDate, this.state.endDate)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      // console.log(JSON.stringify(res.data.response.docs))
      
      this.setState({ results: res.data.response.docs, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));

    // console.log(this.state.results)

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.subject} ${this.state.startDate} ${this.state.endDate}`);
    this.setState({
      subject: "",
      startDate: "",
      endDate: ""
    });
  };

    render() {
      return (
        <div>
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