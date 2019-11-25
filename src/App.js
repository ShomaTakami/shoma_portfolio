import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";

// import SimpleSlider from "./components/SimpleSlider";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        {/* <SimpleSlider /> */}
        <ContactMe resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
