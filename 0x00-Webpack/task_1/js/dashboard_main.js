// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

  // Add elements to the body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Counter tracking function
  let count = 0;

  function updateCounter() {
    count++;
    $("#count").html(`${count} clicks on the button`);
  };
  
  $('button').on('click', _.debounce(updateCounter, 500));