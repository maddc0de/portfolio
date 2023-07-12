import { BrowserRouter } from "react-router-dom";
import { Navbar, Header, About, Tech, Projects, Experience, Contact, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Header />
        </div>
        <About />
        <Tech />
        <Projects />
        <Experience />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App
