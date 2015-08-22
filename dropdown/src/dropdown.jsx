// need to show a button and a list
// this component should know when to show the list based on when a user clicks

var React = require('react');  // npm module browserify
var Button = require('./button');
//var list = require('./list');

module.exports = React.createClass({
  render: function(){
    return <div className="dropdown">
      <Button className="btn-default"
              title={this.props.title}
              subTitleClassName="caret"
      />
    </div>
  }
});
