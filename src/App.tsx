import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Stats } from "./components/Stats";
import "./styles/main-container.scss";

function App() {
  return (
    <div className="main-container w-screen">
      <div className="max-w-7xl m-auto flex flex-col">
        <Nav />
        <Header />
        <Stats />
      </div>
    </div>
  );
}

export default App;
