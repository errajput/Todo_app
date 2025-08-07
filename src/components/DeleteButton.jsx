import { TrashIcon } from "@heroicons/react/24/outline";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 text-black border hover:bg-gray-200 px-2  rounded-md transition cursor-pointer"
    >
      <TrashIcon className="h-6 w-5" />
    </button>
  );
};
export default DeleteButton;
