import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Stats } from "./components/Stats";
import { SidebarContextProvider } from "./context/SidebarContext";
import "./styles/main-container.scss";

function App() {
  return (
    <SidebarContextProvider>
      <div className="main-container">
        <Nav />
        <div className="max-w-7xl m-auto flex flex-col">
          <Header />
          <Stats />
        </div>
      </div>
    </SidebarContextProvider>
  );
}

export default App;
