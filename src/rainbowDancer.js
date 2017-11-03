var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rainbow-dancer');
};

//set prototype and constructor
RainbowDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

var getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

RainbowDancer.prototype.changeColor = function() {
  console.log(this.$node.top);
  this.$node.css('border-color', getRandomColor());
  console.log(this.$node.css('top'));
};

RainbowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.changeColor();
};

