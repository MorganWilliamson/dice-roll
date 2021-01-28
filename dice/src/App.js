import './stylesheets/App.css';
import Header from "./components/Header";
import Roller from "./components/DiceRolling";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Roller />
      <Footer />
    </div>
  );
}

export default App;
