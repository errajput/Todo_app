import { PlusIcon } from "@heroicons/react/24/outline";
const InputContainer = ({ inputValue, setInputValue, handleAdd }) => {
  return (
    <div className="flex m-4 gap-2 justify-center mb-4">
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
        className="bg-gray-100  px-2 border rounded-md hover:bg-gray-50 cursor-pointer transition"
        onClick={handleAdd}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default InputContainer;
