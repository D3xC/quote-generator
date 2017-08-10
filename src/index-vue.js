var vm = new Vue({
  el: '#app',
  data: {
    quoteApiUrl: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
    quote: "Do, or do not. There is no 'try'.",
    author: 'Yoda'
  },
  methods: {
    getQuote: function () {
      var self = this;
      axios({
        method: 'get',
        url: self.quoteApiUrl,
        headers: {
          'X-Mashape-Key': 'WooNP3hqpzmshkSkSecHPppRGLK2p1yZ8E8jsn2LAsyOFbNRcg',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          self.quote = response.data.quote;
          self.author = response.data.author;
        })
        .catch(function (error) {
          var quotes = [{ "quote": "Do, or do not. There is no 'try'.", "author": "Yoda", "category": "Movies" }, { "quote": "Keep your friends close, but your enemies closer.", "author": "The Godfather II", "category": "Movies" }, { "quote": "Gentlemen, you can't fight in here! This is the War Room!", "author": "Dr. Strangelove", "category": "Movies" }, { "quote": "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, g", "author": "On Golden Pond", "category": "Movies" }, { "quote": "I feel the need - the need for speed!", "author": "Maverick", "category": "Movies" }, { "quote": "Frankly, my dear, I don't give a damn.", "author": "Gone With the Wind", "category": "Movies" }, { "quote": "Fasten your seatbelts. It's going to be a bumpy night.", "author": "All About Eve", "category": "Movies" }, { "quote": "The stuff that dreams are made of.", "author": "The Maltese Falcon", "category": "Movies" }, { "quote": "After all, tomorrow is another day!", "author": "Gone With the Wind", "category": "Movies" }, { "quote": "Greed, for lack of a better word, is good.", "author": "Wall Street", "category": "Movies" }, { "quote": "Elementary, my dear Watson.", "author": "Sherlock Holmes", "category": "Movies" }, { "quote": "A martini. Shaken, not stirred.", "author": "Goldfinger", "category": "Movies" }, { "quote": "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!", "author": "Caddyshack", "category": "Movies" }];
          var quote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
          self.quote = quote.quote;
          self.author = quote.author;
        });

    }
  }
});