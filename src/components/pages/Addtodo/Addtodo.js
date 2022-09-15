import withUserContext from '../../hoc/withUserContext';
import AddtodoStyle from './AddtodoStyle.module.css';
import MainStyle from '../Main/Main.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Addtodo({ user, navigate }) {
  const [todoItem, setTodoItem] = useState({ content: '', isCompleted: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const postData = async todo => {
    setLoading(true);
    // console.log('data fetch start');
    const response = await axios.post(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/`,
      todoItem,
    );
    // const data = await response.data;
    // console.log('data fetch finished');
    setLoading(false);
    setTodoItem({ ...todoItem, content: '', isCompleted: false });
    navigate('/alltodos');
  };

  useEffect(() => {
    if (user.username === '' && user.password === '' && !user.isAuth) {
      navigate('/');
    }
  }, []);

  const handleInputUpdate = e => {
    e.target.value.length> 3 && setError('');
    setTodoItem({ ...todoItem, [e.target.name]: e.target.value });
  };
  const handleCheckBoxUpdate = e => {
    setTodoItem({ ...todoItem, [e.target.name]: e.target.checked });
  };

  const handleSave = () => {
    todoItem.content.length > 3
      ? postData(todoItem)
      : setError('Please enter more than 3 characters');
    // postData(todoItem);
  };

  return (
    <>
      <div className={AddtodoStyle.container}>
        Add todo
        <div className={AddtodoStyle.modalContainer}>
          <input
            type="text"
            value={todoItem.content}
            onChange={handleInputUpdate}
            name="content"
          />
          <label>
            is Completed ?
            <input
              type="checkbox"
              defaultChecked={todoItem.isCompleted}
              name="isCompleted"
              onChange={handleCheckBoxUpdate}
            />
          </label>
          <div className="buttons">
            <button onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
            {/* <button onClick={() => setIsOpen(false)}>Close</button> */}
          </div>
          <div className="errors">{error}</div>
        </div>
      </div>
    </>
  );
}

export default withUserContext(Addtodo);
