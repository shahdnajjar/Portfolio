// File: sections/About/About.tsx
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  VStack
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animations/girl on computer.json';

const AboutMe = () => {
  return (
    <Box
      minH={{ base: "auto", md: "100vh" }}
      bg="#EBE8DB"
      position="relative"
      py={{ base: 10, md: 20 }}
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
      </Box>

      <Container maxW={{ base: "90%", md: "7xl" }} position="relative" zIndex={10}>
        <VStack gap={{ base: 4, md: 6 }} mb={{ base: 8, md: 16 }} textAlign="center">
          <Heading
            color="#3D0301"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '6xl' }}
            fontWeight="bold"
          >
            About Me
          </Heading>
          <Box
            w="80px"
            h="4px"
            bg="#D76C82"
            borderRadius="full"
          />
        </VStack>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 8, md: 12 }}
          align="center"
          justify="center"
        >
          <VStack flex={1} align="center" gap={{ base: 4, md: 6 }}>
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
                  speed={0.7}
                  src={animationData}
                  style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '500px' }}
                />
              </Box>
            </Box>
          </VStack>

          <VStack flex={{ base: 1, lg: 1.5 }} align="start" gap={{ base: 4, md: 8 }}>
            <Box
              bg="#EBE8DB"
              borderRadius="3xl"
              px={{ base: 4, md: 8 }}
              py={{ base: 4, md: 8 }}
              border="2px solid #D76C82"
              boxShadow="0 8px 32px rgba(61, 3, 1, 0.1)"
              w="full"
              transition="all 0.3s"
              _hover={{ borderColor: '#B03052' }}
            >
              <VStack align="start" gap={{ base: 4, md: 6 }}>
                <Text
                  color="#3D0301"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="relaxed"
                  opacity={0.9}
                >
                  Welcome to my portfolio! I'm <Text as="span" color="#B03052" fontWeight="bold">Shahd Najjar</Text>, a third-year Computer Science student at the Higher Institute of Computer Science, passionate about web development and project management. I have a solid mastery of web technologies and hands-on experience in project management through my associative engagement.
                </Text>
                
                <Text
                  color="#3D0301"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="relaxed"
                  opacity={0.9}
                >
                  Curious, rigorous, and proactive, I seek to join a dynamic team to contribute to innovative projects while enhancing my technical and professional skills. My internship at StartNow as a full-stack developer involved building a Learning Management System using Spring Boot, React TypeScript, and Chakra UI in an agile setting.
                </Text>

                <Text
                  color="#3D0301"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="relaxed"
                  opacity={0.9}
                >
                  I am deeply committed to my work, investing creativity and precision into every project to deliver unique and effective solutions.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMe;
