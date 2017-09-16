$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});
var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var orderedCardValues = [];
  for(var i = 1; i <= 8; i++) {
    orderedCardValues.push(i);
    orderedCardValues.push(i);
  }

  var randomCardValues = [];
  while(orderedCardValues.length > 0){
    var randomIndex = Math.floor(Math.random() * orderedCardValues.length);
    randomCardValues.push(orderedCardValues[randomIndex]);
    orderedCardValues.splice(randomIndex, 1);
  }

  return randomCardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var cardColor = ['hsl(25, 65%, 85%)', 'hsl(55, 65%, 85%)', 'hsl(90, 65%, 85%)', 'hsl(160, 65%, 85%)', 'hsl(220, 65%, 85%)', 'hsl(265, 65%, 85%)', 'hsl(310, 65%, 85%)', 'hsl(360, 65%, 85%)'];
  $game.empty();
  for(var i = 0; i < cardValues.length; i++) {
    var $card = $('<div class="col-xs-3 card"></div>');
    $card.data('value', cardValues[i]);
    $card.data('flipped', false);
    $card.data('color', cardColor[$card.data('value') - 1]);
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
