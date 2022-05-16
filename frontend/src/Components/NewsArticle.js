import { Link } from "react-router-dom";

function NewsArticle({ oneArticle }) {
  return (
    <article>
         <header>
            <h2>{oneArticle.name}</h2>
        </header>
        <section className="article-preview"> 
            <div>
                Date: {oneArticle.date} - Views: {oneArticle.views}
            </div>
            {/* <div>
                <img className="news-image" src={oneArticle.photo} alt="coins for crypto" />
            </div> */}
            <br />
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="450"
              height="250"
              src={oneArticle.url}>
            </iframe>
            <br />
            Crypto News Favorite? {oneArticle.favorite ? "💰 yes" : "📈 no"}
        </section>
    </article>
  );
}

export default NewsArticle;
