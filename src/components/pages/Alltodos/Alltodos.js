import MainStyle from "../Main/Main.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Alltodos() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://631eea8322cefb1edc3d783a.mockapi.io/todos"
    );
    // console.log(response.data);
    const data = await response.data;
    setTodos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={MainStyle.container}>
        <div>
          <ul className={MainStyle.todoContainer}>
            {todos.length === 0 ? (
              <div>Loading</div>
            ) : (
              todos.map((item) => (
                <li key={item.id}>
                  <input type="checkbox" /> {item.content}
                  <button>Edit</button>
                  <button>Delete</button>
                </li>
              ))
            )}
            {}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Alltodos;
