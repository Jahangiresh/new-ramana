import Header from "./components/Header";
import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import WomenShop from "./pages/WomenShop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/womenshop" element={<WomenShop />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
