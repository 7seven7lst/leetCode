describe('coderbyte_firstReversal', function() {

  beforeEach(function() {
  });

  it('should reverse a string', function() {
    expect(coderbyte_firstReversal("candy")).to.equal("ydnac");
    console.log(coderbyte_firstReversal("candy"));
  	expect(coderbyte_firstReversal("zoo!")).to.equal("!ooz");    
  	console.log(coderbyte_firstReversal("zoo!"));
  });
});
