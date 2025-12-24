  import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import Skils from "./Component/Skils";
import Footer from "./Component/Footer";
import SocialLinks from "./Component/SocialLinks";

  function App() {
    return (
      <>
        <div>
         <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skils/>
      <Contact />
      <Footer />
      <SocialLinks />
        </div>
      </>
    );
  }

  export default App;
