var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
// var TodoList = require('Todolist');
import TodoList from 'TodoList';
var TodoApp = require('TodoApp');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render Todolist', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider>
        <TodoApp/>
      </Provider>
    );

    var todoApp = Testutils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = Testutils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
