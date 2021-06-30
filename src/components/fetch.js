var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-06-30&' +
          'sortBy=popularity&' +
          'apiKey=62213ba2e3ec43deb05ce714435e9f07';
   var req = new Request(url);
        
    fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    .catch(function() {
        console.log('error')
    })


export default fetch