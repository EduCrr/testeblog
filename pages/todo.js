import api from "../api";
import { useState } from "react";
const Todo = ({ todos }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      Tarefas
      {todos.map((item, k) => (
        <>
          <h3>{item.title}</h3>
          <hr />
        </>
      ))}
    </>
  );
};

//cada req chama ele novamente
//dados do user coisas mais leves pega com serverside info mais básicas
//useEffect csr pega dados que mudam com frequencias
export const getServerSideProps = async (setLoading) => {
  const todos = await api.getTodo();
  return {
    props: {
      todos,
    },
  };
};

export default Todo;
