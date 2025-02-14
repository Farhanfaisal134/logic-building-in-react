import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;