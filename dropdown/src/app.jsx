var React = require('react'); // npm module
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // dropdown title
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// react render this class
var element = React.createElement(Dropdown, options);

// react after rendering this class place this into the body tag
React.render(element, document.querySelector('.container'));
