import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Reviews from "./components/Reviews";
import Application from "./components/Application";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Product />
      <Reviews />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
