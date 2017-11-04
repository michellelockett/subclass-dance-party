var DonutDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.addClass('rainbow-dancer');
  this.$node.addClass('donut');
};

//set prototype and constructor
DonutDancer.prototype = Object.create(BlinkyDancer.prototype);
DonutDancer.prototype.constructor = DonutDancer;


DonutDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

