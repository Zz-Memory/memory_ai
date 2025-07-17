import { 
  useState, 
  useEffect,
  Suspense, 
  lazy
} from "react";
import { getRepos, getReposReadme } from "./api/repos";
import "./App.css";
// 路由
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
} from "react-router-dom";
import Loading from "./components/Loading";
const RepoList = lazy(() => import("./pages/RepoList/index.jsx"));

function App() {


  return (
    <>
      <h1>Zz-Memory</h1>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/users/:id/repos" element={<RepoList />} />
        <Route path="*" element={<Navigate to="/users/Zz-Memory/repos" />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
