// Drop down component

var React = require('react');
var Button = require('./button');
var List = require('./list');

module.exports = React.createClass({
  render: function(){

    return <div className="dropdown">
      <Button title={this.props.title}
              className="btn-default"
              subTitleClassName="caret"
        />
      <List />
    </div>
  }
});
