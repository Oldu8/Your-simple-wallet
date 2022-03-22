// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
