import axios from "axios";

export default {
  searchArticles: function(search, beginDate, endDate) {
    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f815311e13884903bfe10291613d7cbf&q=${search}`;
    
        // Ensure dates are numbers
      if (parseInt(beginDate, 10) !== isNaN && parseInt(beginDate, 10) >= 1900) {
          queryURL += "&begin_date=" + beginDate;
      }

      if (parseInt(endDate, 10) !== isNaN && parseInt(endDate, 10) >= 1900) {
          queryURL += "&end_date=" + endDate;
      }

    return axios.get(queryURL);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(_id) {
    return axios.delete(`/api/article/${_id}`);
  },
  // Toggles a quote's favorite property in the db
  // favoriteArticle: function(article) {
  //   article.favorited = !article.favorited;
  //   const { _id, favorited } = article;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // },
  saveArticle: function(article) {
    return axios.post("/api/article", { article });
  },
  getTest: function() {
    return axios.get("http://localhost:3001/test");
  }
};

