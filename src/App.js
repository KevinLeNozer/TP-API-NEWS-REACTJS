import React, {useState, useEffect} from 'react';




  

function App() {
    let [newsList, setNewsList] = useState()
  useEffect(() => {
          fetch('https://newsapi.org/v2/everything?'+
              'q=Apple&' +
              'from=2021-06-30&' +
              'sortBy=popularity&' +
              'apiKey=62213ba2e3ec43deb05ce714435e9f07')
      .then(response => response.json())
      .then(data => setNewsList(data.articles))
      console.log(newsList)

  },[])
    return (
    <div>
         {newsList && newsList.map((a) => 
          <div>
            <img src={a.urlToImage}></img>
              <h1>{a.title}</h1>
              <h2>{a.author}</h2>
              <p>{a.description}</p>
              <a href="https://www.reuters.com/business/media-telecom/hk-media-group-next-digital-stop-operating-july-1-memo-2021-06-30/">{a.url}</a>
          </div>
         )}
    </div>
  );
}

export default App;