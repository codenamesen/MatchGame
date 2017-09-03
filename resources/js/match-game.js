var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardValues = [];
  var j = 1;
  for(var i = 0; i < 16; i++) {
    cardValues.push(j);
    cardValues.push(j);
    j++;
    i++;
  }
  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game = $('<div><h1>New</h1></div>');
  var $card = {};

  for(var i = 0; i < 16; i++){
    $card.value = cardValues[i];
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
