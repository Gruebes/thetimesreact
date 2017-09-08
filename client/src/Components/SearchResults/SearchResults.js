import React from "react";
import { } from 'react-materialize';
import SearchItem from "../SearchItem"

const SearchResults = props =>    
    <ul className="list-group search-results">
        {props.articles.map(article =>
            <SearchItem article={article} getArticles={props.getArticles} />
    )}
    </ul>;

export default SearchResults;


