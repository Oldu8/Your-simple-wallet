import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Headers/header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
