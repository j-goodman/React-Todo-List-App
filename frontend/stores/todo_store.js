var _todos = {};
var _callbacks = [];

var TodoStore = {
  all: function () {
    var todos = [];
    for(var id in _todos) {
      if (_todos.hasOwnProperty(id)) {
        todos.push(_todos[id]);
      }
    }
    return todos;
  },

  create: function(todo) {
    $.ajax({
      type: "POST",
      url: "/api/todos",
      dataType: "json",
      data: todo,
      success: function (todo) {
        _todos[todo.id] = todo;
        TodoStore.changed();
      }
    });
  },

  destroy: function(id) {
    $.ajax({
      type: "DELETE",
      url: ("/api/todos/" + id),
      dataType: "json",
      success: function (todo) {
        delete _todos[todo.id];
        TodoStore.changed();
      }
    });
  },

  toggleDone: function(id) {
    if (_todos.hasOwnProperty(id)) {
        var done = !_todos[id].done;
      $.ajax({
        type: "PATCH",
        url: ("/api/todos/" + id),
        dataType: "json",
        data: {todo: {done: done}},
        success: function (todo) {
          _todos[id].done = done;
          TodoStore.changed();
        }
      });
    }
  },

  fetch: function () {
    $.ajax({
      type: "GET",
      url: "/api/todos",
      dataType: "json",
      success: function (todos) {
        _todos = {};
        todos.forEach(function (todo) {
          _todos[todo.id] = todo;
        });
        TodoStore.changed();
      }
    });
  },

  changed: function () {
    _callbacks.forEach(function(cb) {
      cb();
    });
  },

  addChangeHandler: function (cb) {
    _callbacks.push(cb);
  },

  removeChangeHandler: function (cb) {
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === cb) {
        _callbacks.splice(i, 1);
        return;
      }
    }
  }
};

module.exports = TodoStore;
