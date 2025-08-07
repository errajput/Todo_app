import CustomCheckbox from "./CustomCheckbox";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const TodoItem = ({
  v,
  markDone,
  handleDelete,
  handleEdit,
  setDraggingId,
  handleDropDrag,
}) => {
  return (
    <div
      key={v.id}
      className=" p-2 m-2 rounded-md"
      draggable
      onDragStart={() => setDraggingId(v.id)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDropDrag(v.id)}
    >
      <div className="flex items-center gap-4 ">
        <Squares2X2Icon className="h-3 w-3 text-gray-400 cursor-move" />
        <CustomCheckbox checked={v.isDone} onChange={() => markDone(v.id)} />
        <p
          className={`flex-1 text-left ${
            v.isDone ? "line-through text-gray-500" : ""
          }`}
        >
          {v.title}
        </p>
        <div className="flex gap-2">
          {!v.isDone && <EditButton onClick={() => handleEdit(v.id)} />}

          <DeleteButton onClick={() => handleDelete(v.id)} />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
