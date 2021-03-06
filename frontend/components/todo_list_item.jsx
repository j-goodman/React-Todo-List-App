var React = require('react');
var TodoStore = require('../stores/todo_store');
var DoneButton = require('./done_button');
var TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function() {
    return { displayDetail: false };
  },

  toggleDetail: function() {
    this.setState( {displayDetail: !this.state.displayDetail});
  },

  render: function () {
    return (
      <article onClick={this.toggleDetail}>
        <h2>
          { this.props.todo.title }
          <br/>
          <DoneButton todo={this.props.todo}/>
        </h2>
        <TodoDetailView display={this.state.displayDetail} todo={this.props.todo}/>
      </article>
    );
  }
});

module.exports = TodoListItem;
