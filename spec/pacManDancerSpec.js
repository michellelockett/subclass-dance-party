describe('PacManDancer', function() {

  var pacMan, clock, blinky, rainbow, donut;
  var timeBetweenSteps = 1000;
  window.dancers = [];


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    blinky = new BlinkyDancer(10, 20, timeBetweenSteps);
    rainbow = new RainbowDancer(10, 20, timeBetweenSteps);
    donut = new DonutDancer(10, 20, timeBetweenSteps);
    window.dancers.push(blinky, rainbow, donut);
    pacMan = new PacManDancer(10, 20, timeBetweenSteps);
  });

  it('should have an image for a node', function() {
    expect(pacMan.$node).to.be.an.instanceof(jQuery);
    expect(pacMan.$node.is("img")).to.be.true;
  });

  it('should have a new pac-man class', function() {
    var classes = pacMan.$node.attr("class").split(' ');
    expect(classes.includes('pac-man')).to.equal(true);
  });

  it('should have a step function that makes it move', function() {
    var oldPos = pacMan.getCurrentPosition();
    pacMan.step();
    var newPos = pacMan.getCurrentPosition();
    expect(oldPos).to.not.equal(newPos);
  });

  it('should have an eat function with each step that makes it eat only nearby donuts', function() {
    expect(window.dancers.length).to.equal(2);
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      sinon.spy(pacMan, 'step');
      expect(pacMan.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(pacMan.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(pacMan.step.callCount).to.be.equal(2);
    });
  });
});
