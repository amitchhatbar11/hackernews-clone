import "./App.css";
import { useEffect } from "react";
import api from "./api/api";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
import { Routes } from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
