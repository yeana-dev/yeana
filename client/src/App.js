import Layout from "./components/Layout";
import Home from "./screens/Home";
import ProjectDetail from "./screens/ProjectDetail";
import { Routes, Route } from "react-router-dom";
// import { projects } from "../services/projects";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
