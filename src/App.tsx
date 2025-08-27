import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/ui/navbar";
import LandingPage from "./sections/LandingPage/LandingPage";
import AboutMe from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <Box w="100vw" overflow="hidden">
      {/* Navbar en haut */}
      <Navbar />
      {/* Landing Page Section */}
      <LandingPage />
      {/* About Me Section */}
      <AboutMe />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
    </Box>
  );
}

export default App;