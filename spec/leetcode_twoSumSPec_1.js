describe('leetcode_twoSum attempt', function() {

  beforeEach(function() {
  });

  it('should return the index of 2 number that add up to target', function() {
    var arr=twoSum_1([1,3,5,6], 8);
    expect(arr).to.eql([1,2]);
    console.log(arr);
    arr=twoSum_1([1,2,4,7],10);
 	expect(arr).to.eql([null, null]);
    console.log(arr);
  });

  it('should return the index of 2 number that add up to target-- try2', function() {
    var arr=twoSum_2([1,3,5,6], 8);
    expect(arr).to.eql([1,2]);
    console.log(arr);
    arr=twoSum_2([1,2,4,7],10);
  expect(arr).to.eql([null, null]);
    console.log(arr);
  });
});
