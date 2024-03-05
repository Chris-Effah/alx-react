// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Add elements to the body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Counter tracking function
  let count = 0;

  const updateCounter = () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };

  // Debounce the updateCounter function using Lodash
  const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

  // Attach the debounced function to the click event of the button
  $('#startBtn').on('click', debouncedUpdateCounter);
});

