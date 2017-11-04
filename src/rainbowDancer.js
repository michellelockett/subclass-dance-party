var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rainbow-dancer');
};

//set prototype and constructor
RainbowDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.changeColor = function() {
  var getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  this.$node.css('border-color', getRandomColor());
};

RainbowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.changeColor();
};

