const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Edit"
      className="bg-gray-300 text-black border hover:bg-gray-200 px-2 rounded-md transition cursor-pointer"
    >
      Edit
    </button>
  );
};
export default EditButton;
