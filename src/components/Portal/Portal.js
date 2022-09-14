import { createPortal } from 'react-dom';
import MainStyle from '../pages/Main/Main.module.css';
import React, { useState, useEffect } from 'react';

function Portal({ isOpen, setIsOpen, item, setTodoItem }) {
  console.log(item);
  if (!isOpen) return null;

  const handleUpdate = e => {
    // console.log(e.target.value);
    setTodoItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    
  }

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
        <label htmlFor="">
          is Completed ?
          <input type="checkbox" defaultChecked={item.isCompleted} />
        </label>
        <div className="buttons">
          <button onClick={() => setIsOpen(false)}>Save</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

export default React.memo(Portal);
