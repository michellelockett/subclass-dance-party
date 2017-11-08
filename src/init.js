$(document).ready(function() {
  window.dancers = [];
  window.lined = false;

  //be able to line them up by type of dancer or send them back to their original position
  $('.lineUpButton').on('click', function(event) {
    if (window.lined) {
      window.dancers.forEach(function(dancer) {
        if (dancer instanceof PacManDancer === false) {
          dancer.unLine();
        }
      });
      window.lined = false;
    } else {
       window.dancers.forEach(function(dancer) {
        if (dancer instanceof DonutDancer) {
          dancer.lineUp(500);
        } else if (dancer instanceof RainbowDancer) {
          dancer.lineUp(null, 150);
        } else if (dancer instanceof BlinkyDancer) {
          dancer.lineUp(null, 1150);
        }
      });
      window.lined = true;
    }
  });

  //clear the dance fllor
  $('.clearButton').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.$node.remove();
    });
    window.dancers = [];
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    //come constancy for fitting on the stage, and for my Pac Man Dancers
    var y = 1200 * Math.random();
    var x = 500* Math.random();
    if (x < 75) {x = 75;}
    if (y < 110) {y = 110;}
    var timeBetweenSteps = Math.random() * 1000;
    if (dancerMakerFunctionName === 'PacManDancer') { y = 65; timeBetweenSteps = 40; }

    // make a dancer with a random position (or fixed y and fixed time for pacman)

    var dancer = new dancerMakerFunction(x,y, timeBetweenSteps);

    //add the dancer to the dance floor
    $('body').append(dancer.$node);

    //add the dancer to the collection object
    window.dancers.push(dancer);
  });
});

