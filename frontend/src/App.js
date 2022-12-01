import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <About />
        <Skills />
        {/* <Work />
        <Skills />
        <Testimonial />
        <Footer />  */}
      </div>
    </ThemeProvider>
  );
}

export default App;
