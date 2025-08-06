import { useState, useEffect } from "react";
import CustomCheckbox from "./components/Customcheckbox";
import DeleteButton from "./components/DeleteButton";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

    const newTodo = {
      id: Date.now(),
      title: inputValue,
      isDone: false,
    };

    saveTodo([newTodo, ...todo]);
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

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <h1 className="text-3xl text-black font-bold mb-6">Todo App</h1>

      <div className="w-full max-w-xl h-full min-h-full bg-gray-200  rounded-md  grid justify-center items-center gap-2">
        <div className="flex m-4 gap-2 items-center mb-4">
          <input
            type="text"
            className="border border-black rounded-md outline-none focus:ring-1 bg-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button
            className="bg-gray-100  px-2 border items-center rounded-md hover:bg-gray-50 cursor-pointer transition"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <div className="w-full max-w-md">
          {todo.length === 0 ? (
            <div className="text-center mb-4 text-gray-500 py-10 bg-white shadow-md rounded-md">
              <p className="text-lg font-medium">No tasks yet</p>
              <p className="text-sm mt-1">Start adding your todos above.</p>
            </div>
          ) : (
            todo.map((v) => (
              <div key={v.id} className="flex gap-4 mb-3 justify-between">
                <CustomCheckbox
                  checked={v.isDone}
                  onChange={() => markDone(v.id)}
                />
                <p> {v.title}</p>
                <div className="flex gap-2">
                  <button className="border rounded-md bg-gray-100 px-2 cursor-pointer hover:bg-gray-50">
                    Edit
                  </button>
                  <DeleteButton onClick={() => handleDelete(v.id)} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
