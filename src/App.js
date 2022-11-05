import "./App.css";
// import Ad from "./components/Ad";
import Banner from "./components/Banner";
// import Vote from "./components/Vote";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NewAd from "./components/Scrape";

function App() {
  return (
    <div className="App">
      <Banner />
      <Login />
      <NewAd />
      <Footer />
    </div>
  );
}

export default App;
