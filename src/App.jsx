import { useState, useEffect } from "react";

import InputContainer from "./components/InputContainer";

import ShowCompletedTodo from "./components/ShowCompletedtodo";
import TodoItem from "./components/TodoItem";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [showCompletedTodo, setShowCompletedTodo] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("todo"));
    setTodo(JSON.parse(localStorage.getItem("todo") || "[]"));
  }, []);

  const saveTodo = (updatedTodos) => {
    setTodo(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    if (editingId) {
      const updatedTodos = todo.map((item) =>
        item.id === editingId ? { ...item, title: inputValue } : item
      );
      saveTodo(updatedTodos);
      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: inputValue,
        isDone: false,
      };

      saveTodo([newTodo, ...todo]);
    }
    setInputValue("");
  };

  const markDone = (id) => {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );

    saveTodo(updatedTodos);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
      const updatedTodos = todo.filter((item) => item.id !== id);
      saveTodo(updatedTodos);
    }
  };

  const handleEdit = (id) => {
    const item = todo.find((t) => t.id === id);
    setInputValue(item.title);
    setEditingId(id);
  };

  const handleDropDrag = (dropId) => {
    // e.preventDefault();
    // console.log(draggingId, dropId);

    const newTodos = [...todo];

    const draggingIndex = newTodos.findIndex((todo) => todo.id === draggingId);

    const dropToIndex = newTodos.findIndex((todo) => todo.id === dropId);

    const draggingTodo = newTodos[draggingIndex];
    const dropToTodo = newTodos[dropToIndex];

    newTodos[draggingIndex] = dropToTodo;
    newTodos[dropToIndex] = draggingTodo;

    saveTodo(newTodos);
  };

  const SortedTodo = [...todo].sort((a, b) => {
    if (a.isDone === b.isDone) return 0;
    return a.isDone ? 1 : -1;
  });

  return (
    <div className=" min-h-screen bg-white flex flex-col items-center p-4">
      <h1 className=" text-3xl text-black font-bold mb-6">Todo App</h1>

      <div className="min-h-full  bg-gray-200  rounded-md  flex flex-col items-center gap-2">
        <InputContainer
          inputValue={inputValue}
          handleAdd={handleAdd}
          setInputValue={setInputValue}
        />
        <div className="w-[400px] mx-auto">
          {SortedTodo.length === 0 ? (
            <div className="text-center mb-4 text-gray-500 py-10 bg-white shadow-md rounded-md">
              <p className="text-lg font-medium">No tasks yet</p>
              <p className="text-sm mt-1">Start adding your todos above.</p>
            </div>
          ) : (
            SortedTodo.filter((v) => !v.isDone).map((v) => (
              <TodoItem
                key={v.id}
                v={v}
                markDone={markDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setDraggingId={setDraggingId}
                onDragOver={(e) => e.preventDefault()}
                handleDropDrag={handleDropDrag}
              />
            ))
          )}
        </div>

        <div className="w-[400px] mx-auto">
          <ShowCompletedTodo
            setShowCompletedTodo={setShowCompletedTodo}
            showCompletedTodo={showCompletedTodo}
          />

          {showCompletedTodo &&
            SortedTodo.filter((v) => v.isDone).map((v) => (
              <TodoItem
                key={v.id}
                v={v}
                markDone={markDone}
                handleDelete={handleDelete}
                setDraggingId={setDraggingId}
                onDragOver={(e) => e.preventDefault()}
                handleDropDrag={handleDropDrag}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default App;
