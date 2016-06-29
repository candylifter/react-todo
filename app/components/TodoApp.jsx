var React = require('react');
var TodoList = require('TodoList');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Play some hearthstone'
        },
        {
          id: 4,
          text: 'Pwn noobs in Overwatch'
        }]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});
