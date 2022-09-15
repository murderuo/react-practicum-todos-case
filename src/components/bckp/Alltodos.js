import MainStyle from '../Main/Main.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Portal from '../../Portal/Portal';

function Alltodos() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
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

  const deleteData = async () => {
    setLoading(true);
    console.log('data fetch start');
    const response = await axios.put(
      `https://631eea8322cefb1edc3d783a.mockapi.io/todos/${item.id}`,
      item,
    );
    const data = await response.data;
    console.log('data fetch finished');
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [loading]);

  const handleDelete = item => {
    
    const filteredTodos = todos.filter(todo => todo.id !== item.id);
    setTodos(filteredTodos);
  };

  const handleCompleCheck = item => {
    const setCompleteTodos = todos.map(todo =>
      todo.id === item.id ? { ...todo, isCompleted: true } : todo,
    );

    const completedTodoList = setCompleteTodos.filter(
      todo => todo.isCompleted === true,
    );

    const notCompletedList = setCompleteTodos.filter(
      todo => todo.isCompleted === false,
    );

    // console.log(notCompletedList);
    setCompletedTodos([...completedTodos, ...completedTodoList]);
    setTodos(notCompletedList);
  };

  const handleUnCompleteCheck = item => {
    const unCompletedTodoList = completedTodos.map(todo =>
      todo.id === item.id ? { ...todo, isCompleted: false } : todo,
    );
    // console.log(unCompletedTodoList);
    const newCompletedTodoList = unCompletedTodoList.filter(
      todo => todo.isCompleted === true,
    );
    const newUnCompletedTodoList = unCompletedTodoList.filter(
      todo => todo.isCompleted === false,
    );

    setTodos([...todos, ...newUnCompletedTodoList]);
    setCompletedTodos([...newCompletedTodoList]);
  };

  const handleEdit = todo => {
    setTodoItem(todo);
    setIsOpen(true);
  };
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
                />
                <label className={item.isCompleted ? MainStyle.completed : ''}>
                  {item.content}
                </label>{' '}
                <div>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
              </li>
            ))
          )}
        </ul>

        {/*  */}

        {completedTodos.length === 0 ? (
          <h2>completed todos not found</h2>
        ) : (
          <>
            <h2>Completed Todos</h2>
            <ul className={MainStyle.todoContainer}>
              {completedTodos.map(todo => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    onClick={() => handleUnCompleteCheck(todo)}
                    defaultChecked={todo.isCompleted}
                  />
                  <label className={MainStyle.completed}>{todo.content}</label>
                </li>
              ))}
            </ul>
          </>
        )}
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
