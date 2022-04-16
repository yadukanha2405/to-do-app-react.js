import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ item, deletList }) {
  return (
    <div>
      {item.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p> {title} </p>
            <div>
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deletList(id)}
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
