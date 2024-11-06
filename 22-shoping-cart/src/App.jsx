import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
};

export default App;