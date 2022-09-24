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

  it.skip('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it.skip('should be an instance of Traveler', () => {
    expect(traveler1Data).to.be.an.instanceof(Traveler)
    expect(traveler2Data).to.be.an.instanceof(Traveler)
  });

  it.skip('should have an ID', () => {
    expect(traveler1Data.id).to.equal(1)
    expect(traveler2Data.id).to.equal(2)
  });

  it.skip('should have a name', () => {
    expect(traveler1Data.name).to.equal('Ham Leadbeater')
    expect(traveler2Data.name).to.equal('Rachael Vaughten')
  });

  it.skip('should have a traveler type', () => {
    expect(traveler1Data.travelerType).to.equal('relaxer')
    expect(traveler2Data.travelerType).to.equal('thrill-seeker')
  });

  it.skip('should get past trips', () => {
    expect(traveler1Data.).to.equal()
    expect(traveler2Data.).to.equal()
  });

  it.skip('should get upcoming trips', () => {
    expect(traveler1Data.).to.equal()
    expect(traveler2Data.).to.equal()
  });

  it.skip('should get pending trips', () => {
    expect(traveler1Data.).to.equal()
    expect(traveler2Data.).to.equal()
  });

  it.skip('should calculate total spent on trips this year', () => {
    expect(traveler1Data.).to.equal()
    expect(traveler2Data.).to.equal()
  });

});
