var React = require('react'); // npm module
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',  // drop down button title
  items: [  // list of items to show in the dropdown
    'apple pie',
    'Peach cobbler',
    'Coconut pie'
  ]
};

// react render this class
var element = React.createElement(Dropdown, options);

// react after rendering this class place this into the body tag
React.render(element, document.querySelector('.container'));
