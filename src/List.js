import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ item, deletList, editItem }) {
  return (
    <div>
      {item.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p> {title} </p>
            <div>
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deletList(id, item)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
