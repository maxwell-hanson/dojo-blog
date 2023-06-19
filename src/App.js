import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Blog from "./pages/blog/blog";
import Home from "./Home";
import Games from "./pages/games/games";
import TestPage from "./pages/testpage/testPage";

function App() {
  const title = "welcome to my blog";
  const link1 = "https://weather.com/";

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/testpage" element={<TestPage/>}></Route>
            {" "}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
