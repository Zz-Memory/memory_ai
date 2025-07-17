import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// 路由
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";
// 全局状态管理
import { GlobalProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
    <GlobalProvider>
        <Router>
            <App />
        </Router>
    </GlobalProvider>
);
