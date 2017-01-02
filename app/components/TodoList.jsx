var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function() {
		var {todos} = this.props;
		var renderTodos = () => {
			if(todos.length === 0) {
				return (
					<p className="container__message">Nothing To Do</p>
				)
			}
			return todos.map((todo) => {
				return (
					//{...todo} will spread through the 'todo' object and find the properties in that object
					//with this you will be able to use 'this.props' and get 'text' property of the 'todo' object
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				)
			})
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});

module.exports = TodoList;