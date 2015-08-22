var options = {
  thumbnailData: [{
    title: "Show Courses",
    number: 32,
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

// define a react class
var Badge = React.createClass({displayName: "Badge",
  render: function(){
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
          this.props.title, "  ", React.createElement("span", {className: "badge"}, this.props.number)
        )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

  return React.createElement("div", null, 
       list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});
