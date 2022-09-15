import { createPortal } from 'react-dom';
import MainStyle from '../pages/Main/Main.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portal({ isOpen, setIsOpen, item, setTodoItem, loading, setLoading }) {
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const putData = async () => {
    setLoading(true);
    // console.log('data fetch start');
    const response = await axios.put(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/${item.id}`,
      item,
    );
    // const data = await response.data;
    // console.log('data fetch finished');
    setIsOpen(false);
    setLoading(false);
  };

  const handleInputUpdate = e => {
    e.target.value.length > 3 && setError('');
    setTodoItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleCheckBoxUpdate = e => {
    // console.log(e.target.checked);
    setTodoItem({ ...item, [e.target.name]: e.target.checked });
  };

  const handleSave = () => {
    // console.log(item);
    item.content.length > 3
      ? putData()
      : setError('Please enter more than 3 characters');

    // loading ? setIsOpen(false) : setIsOpen(true);
    // setIsOpen(false);
  };

  return createPortal(
    <div className={MainStyle.modalwindow}>
      {/* {JSON.stringify(item)} */}
      <div className={MainStyle.modalContainer}>
        <input
          type="text"
          value={item.content}
          onChange={handleInputUpdate}
          name="content"
        />
        <label>
          is Completed ?
          <input
            type="checkbox"
            defaultChecked={item.isCompleted}
            name="isCompleted"
            onChange={handleCheckBoxUpdate}
          />
        </label>
        <div className="buttons">
          <button onClick={handleSave} disabled={loading}>
            {loading ? 'Updating...' : 'Save'}
          </button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
      <div className="errors">{error}</div>
    </div>,
    document.getElementById('portal'),
  );
}

export default React.memo(Portal);
