import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
