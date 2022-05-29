import { useEffect, useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { SidebarContextProvider } from "./context/SidebarContext";
import "./styles/main-container.scss";

export default function App() {
  const [targetLine, setTargetLine] = useState(0);

  const currentScroll = scrollY;
  const screenHeight = innerHeight / 2;

  useEffect(() => {

    setTargetLine(currentScroll + screenHeight);
    console.log(targetLine);
  }, [scrollY]);

  addEventListener("scroll", targetLine);  

  return (
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
  );
}
