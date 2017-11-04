describe('donutDancer', function() {

  var donutDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    donutDancer = new donutDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(donutDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a new donut class', function() {
    var classes = donutDancer.$node.attr("class").split(' ');
    expect(classes.includes('donut')).to.equal(true);
  });

  it('should have a step function that does not make its node blink', function() {
    sinon.spy(donutDancer.$node, 'toggle');
    donutDancer.step();
    expect(donutDancer.$node.toggle.called).to.be.false;
  });

  it('should have a step function that makes it change color', function() {
    var oldColor = donutDancer.$node.css('border-color');
    sinon.spy(donutDancer, 'changeColor');
    donutDancer.step();
    var newColor = donutDancer.$node.css('border-color');
    expect(oldColor).to.not.equal(newColor);
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      sinon.spy(donutDancer, 'step');
      expect(donutDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(donutDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(donutDancer.step.callCount).to.be.equal(2);
    });
  });
});
