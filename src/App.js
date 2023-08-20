import "./styleCss/App.css";
import "./styleCss/advice.css";
import "./styleCss/footer.css";
import "./styleCss/map.css";
import "./styleCss/navbar.css";
import { Footer, Body, NavbarToggler } from "./components";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarToggler />
      <Body />
      <Footer />
    </>
  );
}

export default App;
