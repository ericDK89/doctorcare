import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { NavbarContextProvider } from "./context/NavbarContext";
import { SidebarContextProvider } from "./context/SidebarContext";
import "./styles/main-container.scss";

export default function App() {

  return (
    <NavbarContextProvider>
      <SidebarContextProvider>
        <div className="main-container">
          <Nav />
          <div className="max-w-7xl m-auto flex flex-col">
            <Header />
            <Stats />
          </div>
          <Services />
          <AboutUs />
          <Contact />
          <Footer />
        </div>
      </SidebarContextProvider>
    </NavbarContextProvider>
  );
}
