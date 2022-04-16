import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ item }) {
  return (
    <div>
      {item.map((item) => {
        const { title, id } = item;
        return (
          <div>
            <p key={id}> {title} </p>
            <button>
              <FaEdit />
            </button>
            <button>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
}
