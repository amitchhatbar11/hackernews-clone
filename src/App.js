import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
import { Routes } from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        {/* Layout structure so that Header section can stay common in any page. */}
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
