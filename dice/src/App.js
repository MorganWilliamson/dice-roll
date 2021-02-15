import './stylesheets/App.css';
import Header from "./components/Header";
import Roller from "./components/DiceRolling";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="AppHead">
      <Header />
    </div>

    <div className="AppBody">
      <Roller />
    </div>

    <div className="AppFoot">
      <Footer />
    </div>
    </>
  );
}

export default App;
