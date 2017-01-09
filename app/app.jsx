var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', state);
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodo(initialTodos));

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	//You need <provider> tag so that the elements that are passed in this tag can have access to store.
	//TodoApp as well as its children will have access to data in the store and use dispatch store.
	//<Provider> tag needs an attribute call store and it needs to the name of the store component that you created.
	<Provider store={store}>
		 <TodoApp/>
	</Provider>,
 	document.getElementById('app')
);
