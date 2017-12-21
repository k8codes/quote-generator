$(document).ready(function() {
  let randomNum;
  let quotes = [
    "Wubba lubba dub dub!", "We've got a lot of friends and family to exterminate", "Beth: 'Dad, why does our house have blast shields?' Rick: 'Trust me, Beth, you don't want to know how many answers that question has.'", "I thought the whole point of having a dog was to feel superior, Jerry. If I were you, I wouldn't pull that thread.", "Sometimes science is more art than science, Morty. A lot of people don't realize that.", "Not so fast, Morty. You heard your mom. We've got adventures to go on, Morty - just you and me - and sometimes your sister and sometimes your mom, but never your dad. You want to know why, Morty? Because he crossed me.", "Can somebody just let me out of here? If I die in a cage, I lose a bet.", "Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.", "Don't break an arm jerking off, Morty.", "Get Schwifty!", "Little tip, Morty. Never clean DNA vials with your spit."
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
  
  randomize();
  generateQuote();
})
