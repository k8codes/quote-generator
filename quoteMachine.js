$(document).ready(function() {
  let randomNum;
  let quotes = [
    "Wubba lubba dub dub!", "We've got a lot of friends and family to exterminate", "Beth: 'Dad, why does our house have blast shields?' Rick: 'Trust me, Beth, you don't want to know how many answers that question has.'", "I thought the whole point of having a dog was to feel superior, Jerry. If I were you, I wouldn't pull that thread.", "Sometimes science is more art than science, Morty. A lot of people don't realize that.", "Not so fast, Morty. You heard your mom. We've got adventures to go on, Morty - just you and me - and sometimes your sister and sometimes your mom, but never your dad. You want to know why, Morty? Because he crossed me.", "Can somebody just let me out of here? If I die in a cage, I lose a bet.", "Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.", "Don't break an arm jerking off, Morty.", "Get Schwifty!", "Little tip, Morty. Never clean DNA vials with your spit.", "Principal Vagina: 'Hello, this is Principal Vagina. No relation.'", "Weddings are basically funerals with cake.", "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.", "I'm Pickle Riiiiick!", "Morty: 'I mean, why would a Pop-Tart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live. You know what I mean?' Rick: 'You're missing the point, Morty. Why would he drive a smaller toaster with wheels? I mean, does your car look like a smaller version of your house? No.'", "Jerry: 'I wish that shotgun was my penis.' Beth: 'If it was, you could call me Ernest Hemingway.'", "I'm sorry, but your opinion means very little to me.", "School is not a place for smart people.", "I'm not the nicest guy in the universe because I'm the smartest. And being nice is something stupid people do to hedge their bets.", "Sometimes science is more art than science, Morty. Lotta people don't get that.", "You are a piece of shit and I can prove it mathematically.", "I'm not looking for judgement. Just a yes or no.", "Get%20your%20shit%20together.%20Get%20it%20all%20together%2C%20and%20put%20it%20in%20a%20backpack%2C%20all%20your%20shit%2C%20so%20it's%20together.%20And%20if%20you%20gotta%20take%20it%20somewhere%2C%20you%20know%2C%20take%20it%20to%20the%20shit%20store%20and%20sell%20it%2C%20or%20put%20it%20in%20the%20museum.%20I%20don't%20care%20what%20you%20do.%20You%20just%20gotta%20get%20it%20together.%20Get%20your%20shit%20together."
  ];
  randomize = () => randomNum = Math.floor(Math.random() * (quotes.length));
  generateQuote = () => $('#words').html(quotes[randomNum]);

  $('#getQuote').click(function() {
    randomize();
    generateQuote();
  })

  $('#tweet').click(function() {
    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes[randomNum]));
  })

  $('#fb').click(function() {
    FB.ui({
      method: 'feed',
      link: 'k8codes.github.io/quote-generator',
      quote: encodeURIComponent(quotes[randomNum]),
    }, function(response){});
  })

  randomize();
  generateQuote();
})
