import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/Services";
import WhyUse from "./components/WhyUse";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return(
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Services/>
      <WhyUse/>
      <CTA/>
    </main>
    <Footer/>
    
    
    
    </>
  )
}

export default App;