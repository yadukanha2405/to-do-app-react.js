import { useState } from "react";
import Alert from "./Alert";
import List from "./List";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter Something", "danger");
    } else if (name && isEdit) {
    } else {
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeAll = () => {
    setList([]);
  };

  const deletList = (id) => {
    showAlert(true, "Item Deleted", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h1>My To Do App</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">{isEdit ? "Edit" : "Submit"}</button>
        </form>
      </div>

      {list.length > 0 && (
        <div>
          <List item={list} deletList={deletList} />
          <button className="clear-btn" onClick={removeAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
