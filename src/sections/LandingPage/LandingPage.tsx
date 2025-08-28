// File: sections/LandingPage/LandingPage.tsx
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { Download, Github, Linkedin, Mail, Dribbble } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animations/Coder.json';

const LandingPage = () => {
  return (
    <Box
      minH={{ base: "80vh", md: "100vh" }}
      bg="#EBE8DB"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top={{ base: "40px", md: "80px" }}
          left={{ base: "20px", md: "40px" }}
          w={{ base: "80px", md: "128px" }}
          h={{ base: "80px", md: "128px" }}
          bg="#B03052"
          opacity={0.1}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          top={{ base: "100px", md: "160px" }}
          right={{ base: "20px", md: "80px" }}
          w={{ base: "120px", md: "192px" }}
          h={{ base: "120px", md: "192px" }}
          bg="#D76C82"
          opacity={0.1}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom={{ base: "40px", md: "80px" }}
          left={{ base: "20px", md: "80px" }}
          w={{ base: "100px", md: "160px" }}
          h={{ base: "100px", md: "160px" }}
          bg="#3D0301"
          opacity={0.05}
          borderRadius="full"
          filter="blur(48px)"
        />
      </Box>

      <Box maxW="full" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }} position="relative" zIndex={10}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 8, md: 12 }}
          align="center"
          minH={{ base: "auto", md: "100vh" }}
          maxW="7xl"
          mx="auto"
        >
          {/* Lottie Animation - Shows first on mobile, second on desktop */}
          <Flex 
            justify={{ base: 'center', lg: 'end' }} 
            flex={1}
            order={{ base: 1, lg: 2 }}
          >
            <Box position="relative" w={{ base: "80%", sm: "60%", md: "500px" }} h={{ base: "auto", md: "500px" }}>
              <Box
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Player
                  autoplay
                  loop
                  speed={0.8}
                  src={animationData}
                  style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '500px' }}
                />
              </Box>
            </Box>
          </Flex>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <VStack 
            align={{ base: 'center', lg: 'start' }} 
            gap={{ base: 4, md: 8 }} 
            flex={1}
            order={{ base: 2, lg: 1 }}
          >
            <VStack align={{ base: 'center', lg: 'start' }} gap={{ base: 2, md: 4 }}>
              <VStack align={{ base: 'center', lg: 'start' }} gap={{ base: 1, md: 2 }}>
                <Heading
                  color="#3D0301"
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '6xl' }}
                  fontWeight="bold"
                  textAlign={{ base: 'center', lg: 'left' }}
                  lineHeight="1.1"
                >
                  Hi, I'm Shahd Najjar
                </Heading>
                
                <Flex align="baseline" gap={3} wrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                  <Heading
                    fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '5xl' }}
                    fontWeight="bold"
                    color="#B03052"
                    lineHeight="1.3"
                  >
                    Full-Stack
                  </Heading>
                  <Heading
                    color="#3D0301"
                    fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '5xl' }}
                    fontWeight="bold"
                  >
                    Developer
                  </Heading>
                </Flex>
              </VStack>
              
              <Text
                color="#3D0301"
                opacity={0.8}
                fontSize={{ base: 'sm', md: 'lg' }}
                maxW={{ base: "90%", md: "md" }}
                lineHeight="relaxed"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Second-year Computer Science student passionate about web development and digital project management. I create robust and user-friendly web applications, transforming ideas into efficient digital solutions.
              </Text>
            </VStack>

            <HStack gap={{ base: 2, md: 4 }} wrap="wrap" justify={{ base: 'center', lg: 'start' }}>
              <Button
                bg="#D76C82"
                color="#EBE8DB"
                px={{ base: 4, md: 8 }}
                py={{ base: 4, md: 6 }}
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: '#C95A78' }}
                transition="all 0.3s"
                boxShadow="lg"
                size={{ base: "md", md: "lg" }}
              >
                My Projects
              </Button>
              <Button
                variant="outline"
                bg="#EBE8DB"
                color="#3D0301"
                borderColor="#dab8bfff"
                px={{ base: 4, md: 8 }}
                py={{ base: 4, md: 6 }}
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: '#E5E2D5' }}
                transition="all 0.3s"
                size={{ base: "md", md: "lg" }}
              >
                <Download size={18} style={{ marginRight: '8px' }} />
                Download CV
              </Button>
            </HStack>

            <HStack gap={{ base: 2, md: 4 }}>
              <IconButton
                aria-label="GitHub"
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                bg="#EBE8DB"
                color="#3D0301"
                borderRadius="full"
                border="1px solid #cdb5baff"
                _hover={{ bg: '#E5E2D5' }}
                transition="all 0.3s"
              >
                <Github size={20} />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                bg="#EBE8DB"
                color="#3D0301"
                borderRadius="full"
                border="1px solid #c0a9aeff"
                _hover={{ bg: '#E5E2D5' }}
                transition="all 0.3s"
              >
                <Linkedin size={20} />
              </IconButton>
              <IconButton
                aria-label="Email"
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                bg="#EBE8DB"
                color="#3D0301"
                borderRadius="full"
                border="1px solid #c0a9aeff"
                _hover={{ bg: '#E5E2D5' }}
                transition="all 0.3s"
              >
                <Mail size={20} />
              </IconButton>
              <IconButton
                aria-label="Dribbble"
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                bg="#EBE8DB"
                color="#3D0301"
                borderRadius="full"
                border="1px solid #c2a9aeff"
                _hover={{ bg: '#E5E2D5' }}
                transition="all 0.3s"
              >
                <Dribbble size={20} />
              </IconButton>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;