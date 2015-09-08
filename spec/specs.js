describe('triangleTracker', function() {
  it("is false if it is not a triangle", function() {
    expect(triangleTracker(2, 2, 8)).to.equal(false);
  });

  it("returns equilateral if all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });

  it("returns isosceles if two sides are equal", function() {
    expect(triangleTracker(2, 2, 1)).to.equal("isosceles");
  });

  it("returns scalene if no sides are equal", function() {
    expect(triangleTracker(5, 2, 4)).to.equal("scalene");
  });
});
