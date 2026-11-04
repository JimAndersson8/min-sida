import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

const NYCKEL = "todos";

function loadTodos() {
  const sparad = localStorage.getItem(NYCKEL);
  return sparad ? JSON.parse(sparad) : [];
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos);
  const [text, setText] = useState("");

  function saveTodos(nyaTodos) {
    setTodos(nyaTodos);
    localStorage.setItem(NYCKEL, JSON.stringify(nyaTodos));
  }

  function addTodo(e) {
    e.preventDefault();
    const rensad = text.trim();
    if (rensad === "") return;
    saveTodos([...todos, { id: crypto.randomUUID(), text: rensad }]);
    setText("");
  }

  function removeTodo(id) {
    saveTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section className="todo">
      <h2>Att göra</h2>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Skriv en uppgift..."
          aria-label="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      {todos.length === 0 ? (
        <p className="todo-tomt">Inget att göra än.</p>
      ) : (
        <ul className="todo-lista">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;
