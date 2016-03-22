var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return (
      <article>
        <h2>
          { this.props.todo.title }
        </h2>
        <p>
          { this.props.todo.body }
        </p>
      </article>
    );
  }
});

module.exports = TodoListItem;
