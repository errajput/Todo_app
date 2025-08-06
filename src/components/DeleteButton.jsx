const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 text-black border hover:bg-gray-200 px-2  rounded-md transition cursor-pointer"
    >
      Delete
    </button>
  );
};
export default DeleteButton;
