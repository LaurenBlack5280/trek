// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');
//imports
import TravelerRepo from './TravelerRepo'
import Traveler from './Traveler'

import {getAllTravelers, getAllTrips, getAllDestinations} from './apiCalls'

//global variables
let traveler // instance of traveler object
let travelerRepo// instance of travelRepo object
let allTravelers //object containing array of travelers
let allTrips
let allDestinations

//selectors
const pastTrips = document.getElementById('')
const upcomingTrips = document.getElementById('')
const pendingTrips = document.getElementById('')
const totalSpent = = document.getElementById('')
