import React, { useState, useEffect } from "react";
import "../styles/Card.css";

function Card() {
  let [newsList, setNewsList] = useState();
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=fr&apiKey=17de8efe28a14a57890c1abb5f3749fa"
    )
      .then((response) => response.json())
      .then((data) => setNewsList(data.articles));
  }, []);
  return (
    <div className=" container-fluid p-0 m-0">
      <div className="row justify-content-around m-0 flex-wrap">
        {newsList &&
          newsList.map((a) => (
            <div
              className="card col-10 col-md-4 col-lg-3 mt-2 p-0 mx-3"
              key={a.title}
            >
              <img src={a.urlToImage} alt="" class="d-block" />
              <div className="dataC">
                <ul>
                  <li>{a.title}</li>
                  <li>{a.author}</li>
                  <li>{a.description}</li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
