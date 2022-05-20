// import { useState, useEffect } from "react";
// import axios from "axios";
import {Link} from "react-router-dom";
import "./Articles.css";
import articlesData from "../data/articlesData";

// let key = process.env.REACT_APP_API_ARTICLE_KEY;

function Articles() {
// const[articles, setArticles]= useState([]);


// let url = 'https://bot-test-backend.herokuapp.com/resources'

//   useEffect(()=>{
//     axios.get(url)
//     .then((res)=>{
//       console.log(res.data)
//       setArticles(res.data);
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }, []);

console.log(articlesData)

let fetchedArticles = articlesData.map((article, index)=>{
    return(
      <div className="article" key={index}>
        <Link to={`/articles/${index}`}><h3 className="hvr-grow">{article.source}</h3></Link>
        <div>
          <iframe id="inlineFrameExample"
          title={article.source}
          width="450"
          height="250"
          src={`${article.url}`}>
        </iframe>
        </div>
        <h3 className="hvr-grow">Favorite {article.is_favorite? "💰 yes" : "📈 no"}</h3>
      </div>
    )
});
console.log(fetchedArticles.length)
    return (
      <div className="Articles">
        <h1>Articles</h1>
        <div className="articles">
          {fetchedArticles}
        </div>
      </div>
    );
  }
  
  export default Articles;
  