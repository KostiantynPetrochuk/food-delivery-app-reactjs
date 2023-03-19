import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, Category } from "./pages";
import "./normalize.css";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Category />
      <Footer />
    </div>
  );
};

export default App;
