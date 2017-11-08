var PacManDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src=lib/166.gif>');
  this.$node.addClass('pac-man');
  this.setPosition();

};

//set prototype and constructor
PacManDancer.prototype = Object.create(Dancer.prototype);
PacManDancer.prototype.constructor = PacManDancer;
PacManDancer.prototype.move = function() {
  this._left += 10;
  this.setPosition();
  if (this._left > 1200) {
    this.$node.remove();
  }
}

PacManDancer.prototype.eat = function() {
  var that = this;
  //if there is a donut dancer close enough, eat it!
  window.dancers.forEach(function(dancer, i) {
    if (dancer instanceof DonutDancer) {
      var pacX = parseInt(that.$node.position().left);
      var pacY = parseInt(that.$node.position().top);
      var newX = parseInt(dancer.$node.position().left);
      var newY = parseInt(dancer.$node.position().top);
      var dist = Math.sqrt((newX - pacX) * (newX - pacX) + (newY - pacY) * (newY - pacY))
      if (dist <= 75) {
        dancer.$node.hide('fast', function(){ dancer.$node.remove(); });
        window.dancers.splice(i, 1);
      }
    }
  });
}
PacManDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.move();
  this.eat();
};