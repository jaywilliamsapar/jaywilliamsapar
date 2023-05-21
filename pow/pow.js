// Todo List Function
function createTodoList() {
    let todos = [];
  
    // Function to add a new todo
    function addTodo(todo) {
      todos.push(todo);
    }
  
    // Function to remove a todo by its index
    function removeTodoByIndex(index) {
      if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
      }
    }
  
    // Function to get the current list of todos
    function getTodos() {
      return todos;
    }
  
    // Function to display the todos
    function displayTodos() {
      console.log("Todos:");
      todos.forEach((todo, index) => {
        console.log(index + 1 + ". " + todo);
      });
    }
  
    // Return an object with the todo list functions
    return {
      addTodo: addTodo,
      removeTodoByIndex: removeTodoByIndex,
      getTodos: getTodos,
      displayTodos: displayTodos
    };
  }
  
  // Example usage:
  const todoList = createTodoList();
  todoList.addTodo("Buy groceries");
  todoList.addTodo("Finish homework");
  todoList.displayTodos(); // Display the todos
  todoList.removeTodoByIndex(1); // Remove the second todo
  console.log(todoList.getTodos()); // Get the current list of todos
  