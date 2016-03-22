var React = require('react');
var TodoStore = require('../stores/todo_store');
var DoneButton = require('./done_button');

var TodoDetailView = React.createClass({
  handleDestroy: function () {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    if ( this.props.display ) {
      return (
          <p className="detail-view">
            { this.props.todo.body }
            <br/>
            <button className="delete-button" onClick={this.handleDestroy}>Delete</button>
          </p>
      );
    } else {
      return <ul />;
    }
  }
});

module.exports = TodoDetailView;
