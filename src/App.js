import { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";
import "./styles.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter Something", "danger");
    } else if (name && isEdit) {
      showAlert(true, "Item edated", "success");
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "Item Edites", "success");
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
    showAlert(true, "Removed all items", "danger");
    setList([]);
  };

  const deletList = (id, item) => {
    showAlert(true, `${item.title} deleted`, "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const newEditItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(newEditItem.title);
  };

  useEffect(() => {
    const setTimer = setTimeout(() => {
      showAlert();
    }, 2000);
    return () => clearTimeout(setTimer);
  }, [list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
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
          <List item={list} deletList={deletList} editItem={editItem} />
          <button className="clear-btn" onClick={removeAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
