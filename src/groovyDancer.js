var DonutDancer = function(top, left, timeBetweenSteps) {
  RainbowDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.addClass('rainbow-dancer');
  this.$node.addClass('Donut');
};

//set prototype and constructor
DonutDancer.prototype = Object.create(RainbowDancer.prototype);
DonutDancer.prototype.constructor = DonutDancer;

DonutDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.changeColor();
};

