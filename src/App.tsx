import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import "./normalize.css";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
