var React = require('react'); // npm module
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: "Show Courses",
    number: 120,
    imageUrl: "http://formatjs.io/img/react.svg",
    header: "Learn React",
    description: "React is blah blah blah. React is blah blah blah. React is blah blah blah. "
  },{
    title: "Show Courses",
    number: 25,
    imageUrl: "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png",
    header: "Learn Gulp",
    description: "Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow."
  }]
};

// react render this class
var element = React.createElement(ThumbnailList, options);

// react after rendering this class place this into the body tag
React.render(element, document.querySelector('.container'));
