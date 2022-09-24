import chai from 'chai';
const expect = chai.expect;
const Traveler = require('../src/Traveler')

describe('Traveler', () => {

  beforeEach(() => {

    let traveler1Data = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });
    
    let traveler2Data = new Traveler({
      id: 2,
      name: "Rachael Vaughten",
      travelerType: "thrill-seeker"
      })
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1Data).to.be.an.instanceof(Traveler)
    expect(traveler2Data).to.be.an.instanceof(Traveler)
  });

  it('should have an ID', () => {
    expect(traveler1Data.id).to.equal(1)
    expect(traveler2Data.id).to.equal(2)
  });

  it('should have a name', () => {
    expect(traveler1Data.name).to.equal('Ham Leadbeater')
    expect(traveler2Data.name).to.equal('Rachael Vaughten')
  });

  it('should have a traveler type', () => {
    expect(traveler1Data.travelerType).to.equal('relaxer')
    expect(traveler2Data.travelerType).to.equal('thrill-seeker')
  });

});
