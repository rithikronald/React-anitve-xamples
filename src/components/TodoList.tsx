import React, {useEffect, useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const ItemType = 'TODO';

const TodoItem = ({
  todo,
  index,
  moveItem,
  updateTask,
  toggleComplete,
  deleteTask,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: {index},
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: draggedItem => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={node => ref(drop(node))}
      className={`flex items-center gap-2 p-2 border rounded ${
        todo.completed ? 'bg-green-200' : 'bg-white'
      }`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      <input
        type="text"
        value={todo.text}
        onChange={e => updateTask(index, e.target.value)}
        className="flex-1 border px-2"
      />
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 text-white p-1 rounded">
        Delete
      </button>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTask.trim() === '') return;
    setTodos([...todos, {text: newTask, completed: false}]);
    setNewTask('');
  };

  const updateTask = (index, text) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = text;
    setTodos(updatedTodos);
  };

  const toggleComplete = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedTodos = [...todos];
    const [movedItem] = updatedTodos.splice(fromIndex, 1);
    updatedTodos.splice(toIndex, 0, movedItem);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'all'
      ? true
      : filter === 'active'
      ? !todo.completed
      : todo.completed,
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl font-bold">Todo List</h2>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 border px-2"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded">
            Add
          </button>
        </div>
        <div className="flex justify-between mt-2">
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`p-1 rounded ${
                filter === f ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              moveItem={moveItem}
              updateTask={updateTask}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default TodoList;
