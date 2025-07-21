import { 
  useState,
  useEffect
 } from 'react'
import './App.css'
import { 
  getTodos,
  getRepos
} from './api';

function App() {
  const [todos,setTodos] = useState([]);
  const [repos,setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos();
      // console.log(todosResult);
      // setTodos(todosResult.data.data);
      const reposResult = await getRepos();
      console.log(reposResult);
      setRepos(reposResult.data);
    }
    fetchData();
  },[])
  return (
    <>
    {/* <div>
      <h2>Todos</h2>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))
      }
    </div> */}
    <div>
      <h2>Repos</h2>
      {
        repos.map((repo) => (
          <div key={repo.id}>
            <p>{repo.name}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
