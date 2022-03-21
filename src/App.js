// import "./App.css";
import { BrowserRouter } from "react-router-dom";
// comment: немного хаотичная файловая система
import Header from "./components/Headers/header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/main";
// comment: (на будущее) лучше называть более понятно импортированные стили (styles)
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
