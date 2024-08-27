import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import "./styles/Fonts.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About.js'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "/about",
        element: <About />
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
