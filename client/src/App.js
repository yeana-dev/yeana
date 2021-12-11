import Layout from "./components/Layout";
import Home from "./screens/Home";
import ProjectDetail from "./screens/ProjectDetail";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </div>
  );
}

export default App;
