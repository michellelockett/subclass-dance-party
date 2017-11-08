describe('rainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a new rainbow-dancer class', function() {
    var classes = rainbowDancer.$node.attr("class").split(' ');
    expect(classes.includes('rainbow-dancer')).to.equal(true);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(rainbowDancer.$node, 'toggle');
    rainbowDancer.step();
    expect(rainbowDancer.$node.toggle.called).to.be.true;
  });

  it('should have a step function that makes it change color', function() {
    var oldColor = rainbowDancer.$node.css('border-color');
    sinon.spy(rainbowDancer, 'changeColor');
    rainbowDancer.step();
    var newColor = rainbowDancer.$node.css('border-color');
    expect(oldColor).to.not.equal(newColor);
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      sinon.spy(rainbowDancer, 'step');
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
  });
});
