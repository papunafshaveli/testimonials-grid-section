import "./App.css";
import Blackish from "./components/Blackish/Blackish";
import FirstWhite from "./components/FirstWhite/FirstWhite";
import Grey from "./components/Grey/Grey";
import SecondWhite from "./components/SecondWhite/SecondWhite";
import Violet from "./components/Violet/Violet";

function App() {
  return (
    <body>
      <div className="card">
        <Violet />
        <Grey />
        <FirstWhite />
        <Blackish />
        <SecondWhite />
      </div>
    </body>
  );
}

export default App;
