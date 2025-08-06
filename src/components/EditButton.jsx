const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Edit"
      className="bg-green-500 text-white hover:bg-green-600 px-2 rounded-md transition cursor-pointer"
    >
      Edit
    </button>
  );
};
export default EditButton;
