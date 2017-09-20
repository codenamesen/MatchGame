var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

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
  $game.data('flippedArray', []);
  var cardColor = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
  $game.empty();
  for(var i = 0; i < cardValues.length; i++) {
    var $card = $('<div class="col-xs-3 card"></div>');
    $card.data('value', cardValues[i]);
    $card.data('flipped', false);
    $card.data('color', cardColor[$card.data('value') - 1]);
    $game.append($card);
  }

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if($card.data('flipped')){
    return;
  } else {
    $card.css('background-color', $card.data('color'));
    $card.text($card.data('value'));
    $card.data('flipped', true);

    var $flippedCards = $game.data('flippedArray');
    $flippedCards.push($card);
  }

  if($flippedCards.length === 2) {
    if($flippedCards[0].data('value') === $flippedCards[1].data('value')) {
      $flippedCards[0].css('color', 'rgb(204, 204, 204)');
      $flippedCards[0].css('background-color', 'rgb(153, 153, 153)');
      $flippedCards[1].css('color', 'rgb(204, 204, 204)');
      $flippedCards[1].css('background-color', 'rgb(153, 153, 153)');
    } else {
      $flippedCards[0].css('background-color', 'rgb(32, 64, 86)');
      $flippedCards[0].text('');
      $flippedCards[0].data('flipped', false);
      $flippedCards[1].css('background-color', 'rgb(32, 64, 86)');
      $flippedCards[1].text('');
      $flippedCards[1].data('flipped', false);
    }
    $game.data('flippedArray', []);
  } else {
    return;
  }

};
