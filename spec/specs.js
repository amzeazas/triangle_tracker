describe('triangleTracker', function() {
  it("is false if it is not a triangle", function() {
    expect(triangleTracker(2, 2, 8)).to.equal(false);
  });

  it("returns equilateral if all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
  });
});
