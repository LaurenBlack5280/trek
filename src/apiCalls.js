//Network Requests

const getAllTravelers = fetch("http://localhost:3001/api/v1/travelers")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

const getAllTrips = fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

const getAllDestinations = fetch("http://localhost:3001/api/v1/distinations")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

module.exports = {
  getAllTravelers,
  getAllTrips,
  getAllDestinations,
}
