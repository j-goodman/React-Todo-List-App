var React = require('react');
var TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  handleDone: function () {
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function () {
    var text = this.props.todo.done ? "Undo" : "Done";
    return (
      <button onClick={this.handleDone}>{text}</button>
    );
  }
});

module.exports = DoneButton;
