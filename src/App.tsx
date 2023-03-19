import { Route, Routes } from "react-router-dom";

import { Category, Home } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./normalize.css";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />}>
          <Route index element={<Category />} />
          <Route path=":categoryId" element={<Category />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
