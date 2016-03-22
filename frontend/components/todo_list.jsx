var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');

var TodoList = React.createClass({
  getInitialState: function () {
    return { todos: TodoStore.all() };
  },

  componentDidMount: function () {
    TodoStore.addChangeHandler(this.todosChange);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangeHandler(this.todosChange);
  },

  todosChange: function () {
    this.setState({todos: TodoStore.all()});
  },

  render: function() {
    return (
      <div>
        {
          this.state.todos.map( function(todo) {
            return <TodoListItem key={todo.id} todo={todo} />;
          })
        }
      </div>
    );
  }
});

module.exports = TodoList;
