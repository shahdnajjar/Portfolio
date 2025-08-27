import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/ui/navbar";
import LandingPage from "./features/landingpage";
import AboutMe from "./components/ui/aboutme";
import Skills from "./components/ui/skills";
import Projects from "./components/ui/projects"; // Import the new Projects component

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