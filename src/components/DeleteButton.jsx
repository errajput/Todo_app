const DeleteButton = (onclick) => {
  return (
    <button
      onClick={onclick}
      className="bg-red-500 text-white hover:bg-red-600 px-2  rounded-md transition cursor-pointer"
    >
      Delete
    </button>
  );
};
export default DeleteButton;
