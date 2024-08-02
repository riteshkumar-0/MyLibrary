import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
    
    </AuthProvider>
  </BrowserRouter>
);
