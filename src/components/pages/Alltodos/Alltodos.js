import MainStyle from '../Main/Main.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Portal from '../../Portal/Portal';

function Alltodos() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [todoItem, setTodoItem] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await axios.get(
      'https://631eea8322cefb1edc3d783a.mockapi.io/todos',
    );
    // console.log(response.data);
    const data = await response.data;
    setTodos(data);
  };

  const deleteData = async todo => {
    setLoading(true);
    // console.log('data fetch start');
   await axios.delete(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/${todo.id}`,
    );
    // const data = await response.data;
    // console.log('data fetch finished');
    setLoading(false);
  };

  const putData = async item => {
    console.log('putting data',item);
    setLoading(true);
    // console.log('data fetch start');
    await axios.put(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/${item.id}`,
      item,
    );
    // const data = await response.data;
    // console.log('data fetch finished');
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [loading]);

  const handleDelete = item => {
    deleteData(item);
  };

  const handleCompleCheck = item => {
    todos.map(
      todo =>
        todo.id === item.id &&
        putData({ ...todo, isCompleted: !todo.isCompleted }),
    );
  };

  const handleEdit = todo => {
    setTodoItem(todo);
    setIsOpen(true);
  };
  // console.log('todos',todos);
  return (
    <>
      <div className={MainStyle.container}>
        <div id="portal"></div>
        <h2>Todos</h2>
        <ul
          className={
            isOpen
              ? `${MainStyle.todoContainer} ${MainStyle.modalblur}`
              : MainStyle.todoContainer
          }
        >
          {todos.length === 0 ? (
            <div>Todos Loading...</div>
          ) : (
            todos.map(item => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  onClick={() => handleCompleCheck(item)}
                  defaultChecked={item.isCompleted}
                />
                <label className={item.isCompleted ? MainStyle.completed : ''}>
                  {item.content}
                </label>{' '}
                <div>
                  <button onClick={() => handleEdit(item)} disabled={loading}>Edit</button>
                  <button onClick={() => handleDelete(item)} disabled={loading}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <Portal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={todoItem}
        setTodoItem={setTodoItem}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}

export default Alltodos;
