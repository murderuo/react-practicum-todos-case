import { createPortal } from "react-dom";
import MainStyle from "../pages/Main/Main.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Portal({ isOpen, setIsOpen, item, setTodoItem }) {
  // console.log(item);
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  const putData = async () => {
    setLoading(true);
    console.log("data fetch start");

    const response = await axios.put(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/${item.id}`,
      item
    );
    // console.log(response.data);
    const data = await response.data;
    console.log("data fetch finished");
    setLoading(false);
    console.log(data);
  };

  const handleUpdate = (e) => {
    // console.log(e.target.value);
    setTodoItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    putData();
    loading ? setIsOpen(false) : setIsOpen(true);
    // setIsOpen(false);
  };

  return createPortal(
    <div className={MainStyle.modalwindow}>
      {/* {JSON.stringify(item)} */}
      <div className={MainStyle.modalContainer}>
        <input
          type="text"
          value={item.content}
          onChange={handleUpdate}
          name="content"
        />
        <label>
          is Completed ?
          <input type="checkbox" defaultChecked={item.isCompleted} name='isCompleted' />
        </label>
        <div className="buttons">
          <button onClick={handleSave} disabled={loading}>
            {loading?'Updating...':'Save'}
          </button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default React.memo(Portal);
