function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <h1 className="text-3xl text-green-400 font-bold mb-6">Todo App</h1>

      <div className=" flex items-center gap-2">
        <input type="text" className="border border-green-400 focus:ring" />
        <button>Add</button>
      </div>
    </div>
  );
}
export default App;
