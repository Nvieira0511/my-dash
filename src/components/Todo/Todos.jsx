import { Component } from "react";
import "./Todos.css";

/*
render list of todo items able to be retrieved from home page 
updated on refresh


handler serverside
*/
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
      todos: [],
    };
    this.AddTodo = this.AddTodo.bind(this);
    this.InputChange = this.InputChange.bind(this);
    this.RemoveTodo = this.RemoveTodo.bind(this);
    this.GetTodos = this.GetTodos.bind(this);
  }
  componentDidMount() {
    this.GetTodos();
  }
  GetTodos() {
    fetch("/getTodos")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ todos: json });
      });
  }
  InputChange(e) {
    e.preventDefault();
    this.setState({ todoInput: e.target.value });
  }
  RemoveTodo(index) {
    fetch("/removeTodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: index,
      }),
    }).then(() => {
      this.GetTodos();
    });
  }
  AddTodo(e) {
    e.preventDefault();
    let newTodo = this.state.todoInput;
    if (newTodo === "") {
      return;
    }
    fetch("/addTodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
        completed: false,
      }),
    })
      .then(() => {
        this.GetTodos();
      })
      .catch((error) => {
        console.log("Error inserting todo: " + error);
      });
  }
  render() {
    return (
      <div className="todo-list">
        <div className="todo-header">
          <h1>Todo List</h1>
        </div>
        <div className="todo-body">
          <form className="todo-form" action="post" onSubmit={this.AddTodo}>
            <input
              type="text"
              name="newTodo"
              id="todoInput"
              placeholder="Add todo..."
              onChange={this.InputChange}
            />
            <button type="submit">Submit</button>
          </form>
          {this.state.todos.length >= 1
            ? this.state.todos.map((todo) => {
                return (
                  <li key={todo._id}>
                    {todo.title}{" "}
                    <span onClick={() => this.RemoveTodo(todo._id)}>x</span>{" "}
                  </li>
                );
              })
            : "No todos"}
        </div>
      </div>
    );
  }
}

export default Todo;
