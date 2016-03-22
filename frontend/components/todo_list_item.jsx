var React = require('react');
var TodoStore = require('../stores/todo_store')

var TodoListItem = React.createClass({
  handleDestroy: function () {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <article>
        <h2>
          { this.props.todo.title }
        </h2>
        <p>
          { this.props.todo.body }
        </p>
        <button onClick={this.handleDestroy}>Delete</button>
      </article>
    );
  }
});

module.exports = TodoListItem;
