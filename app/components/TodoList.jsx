var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
// var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        //{...todo} will spread through the 'todo' object and find the properties in that object
        //with this you will be able to use 'this.props' and get 'text' property of the 'todo' object
        //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);