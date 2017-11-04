
var Dancer = function(top, left, timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition();
  this.step();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this._top,
    left: this._left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(newTop, newLeft) {
  var newStyleSettings = {
    top: newTop || this._top,
    left: newLeft || this._left
  }
  this.$node.css(newStyleSettings)
};

Dancer.prototype.getCurrentPosition = function() {
  return [this.$node.css('top'), this.$node.css('left')];
}



