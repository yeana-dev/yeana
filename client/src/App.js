import "./App.css";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
