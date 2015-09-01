// Drop down component

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    // setState forces the component to re-render
    this.setState({open: !this.state.open});
  },

  getInitialState: function(){
      return {open: false}
  },

  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem item={item} />
    });


    return <div className="dropdown">
      <Button title={this.props.title}
              className="btn-default"
              subTitleClassName="caret"
              whenClicked={this.handleClick}
        />
      <ul className={"dropdown-menu " + (this.state.open ? " show " : " ")}>
        {list}
      </ul>
    </div>
  }
});
