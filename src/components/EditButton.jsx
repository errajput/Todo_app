import { PencilIcon } from "@heroicons/react/24/outline";
const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Edit"
      className="bg-gray-300 text-black border hover:bg-gray-200 px-2 rounded-md transition cursor-pointer"
    >
      <PencilIcon className="h-5 w-5" />
    </button>
  );
};
export default EditButton;
