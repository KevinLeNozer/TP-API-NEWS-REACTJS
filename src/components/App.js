import React, { useState, useEffect } from 'react';
import '../styles/Article.css';

function App() {
	let [ newsList, setNewsList ] = useState();
	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/top-headlines?country=fr&apiKey=17de8efe28a14a57890c1abb5f3749fa'
		)
			.then((response) => response.json())
			.then((data) => setNewsList(data.articles));
	}, []);
	return (
		<div className="Main">
			{newsList &&
				newsList.map((a) => (
					<div className="article">
						<img src={a.urlToImage} alt="" />
						<h1>{a.title}</h1>						
						<p>{a.description}</p>
            <h2>{a.author}</h2>
            <a href={a.url}><button>Voir l'article</button></a>
					</div>
				))}
		</div>
	);
}

export default App;
