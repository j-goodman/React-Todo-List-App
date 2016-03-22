var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function () {
    return {title: "", body: ""};
  },

  updateTitle: function () {
    var title = this.todoTitle.value;
    this.setState({title: title });
  },

  updateBody: function () {
    this.setState({body: this.todoBody.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    TodoStore.create({ todo: {
      title: this.todoTitle.value,
      body: this.todoBody.value
    }});

    this.setState({title: "", body: ""});
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <label> Title:
          <input type="text"
          ref={ function (ref) {this.todoTitle = ref;}.bind(this) }
          onChange={this.updateTitle}
          value={this.state.title} />
        </label>
        <br/>
        <label> Body:
          <input type="text"
          ref={ function (ref) {this.todoBody = ref;}.bind(this) }
          onChange={this.updateBody}
          value={this.state.body} />
        </label>
        <br/>
        <input className="todo-button" type="submit" value="Create Todo" />
      </form>
    );
  }
});

module.exports = TodoForm;
