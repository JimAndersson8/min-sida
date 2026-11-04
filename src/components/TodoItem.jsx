function TodoItem({ text, onRemove }) {
  return (
    <li className="todo-item">
      <span>{text}</span>
      <button onClick={onRemove} aria-label="Ta bort">✕</button>
    </li>
  );
}

export default TodoItem;
