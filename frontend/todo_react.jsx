var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todo_list.jsx');

$(function (e) {
  ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
  );
});
