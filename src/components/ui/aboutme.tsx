import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  VStack
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animations/website design.json';

const AboutMe = () => {
  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, #FAF9EE 0%, #EEEEEE 50%, #DCCFC0 100%)"
      position="relative"
      py={20}
      overflow="hidden"
    >
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top="80px"
          left="40px"
          w="128px"
          h="128px"
          bg="#A2AF9B"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          top="160px"
          right="80px"
          w="192px"
          h="192px"
          bg="#DCCFC0"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="80px"
          left="80px"
          w="160px"
          h="160px"
          bg="#A2AF9B"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="128px"
          right="128px"
          w="96px"
          h="96px"
          bg="#EEEEEE"
          opacity={0.3}
          borderRadius="full"
          filter="blur(32px)"
        />
      </Box>

      <Container maxW="7xl" position="relative" zIndex={10}>
        <VStack gap={6} mb={16} textAlign="center">
          <Heading
            color="#4A5568"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
          >
            About Me
          </Heading>
          <Box
            w="80px"
            h="4px"
            bg="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)"
            borderRadius="full"
          />
        </VStack>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
          align="center"
          justify="center"
        >
          <VStack flex={1} align="center" gap={6}>
            <Box position="relative">
              <Box
                w="500px"
                h="500px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Player
                  autoplay
                  loop
                  speed={0.7}
                  src={animationData}
                  style={{ width: '500px', height: '500px' }}
                />
              </Box>
            </Box>
          </VStack>

          <VStack flex={1.5} align="start" gap={8}>
            <Box
              bg="rgba(255, 255, 255, 0.7)"
              backdropFilter="blur(20px)"
              borderRadius="3xl"
              px={8}
              py={8}
              border="1px solid"
              borderColor="rgba(162, 175, 155, 0.5)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
              w="full"
              transition="all 0.3s"
              _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
            >
              <VStack align="start" gap={6}>
                <Text
                  color="#4A5568"
                  fontSize={{ base: 'md', lg: 'lg' }}
                  lineHeight="relaxed"
                  opacity={0.9}
                >
                  Welcome to my portfolio! I'm <Text as="span" bg="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)" bgClip="text" color="transparent" fontWeight="bold">Shahd Najjar</Text>, a third-year Computer Science student at the Higher Institute of Computer Science, passionate about web development and project management. I have a solid mastery of web technologies and hands-on experience in project management through my associative engagement.
                </Text>
                
                <Text
                  color="#4A5568"
                  fontSize={{ base: 'md', lg: 'lg' }}
                  lineHeight="relaxed"
                  opacity={0.9}
                >
                  Curious, rigorous, and proactive, I seek to join a dynamic team to contribute to innovative projects while enhancing my technical and professional skills. My internship at StartNow as a full-stack developer involved building a Learning Management System using Spring Boot, React TypeScript, and Chakra UI in an agile setting.
                </Text>

                <Flex align="center" gap={3}>
                  <Text
                    color="#4A5568"
                    fontSize={{ base: 'md', lg: 'lg' }}
                    lineHeight="relaxed"
                    opacity={0.9}
                  >
                    I am deeply committed to my work, investing creativity and precision into every project to deliver unique and effective solutions.
                  </Text>
                </Flex>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="full"
        h="128px"
        bg="linear-gradient(to top, rgba(250, 249, 238, 0.4) 0%, transparent 100%)"
      />
    </Box>
  );
};

export default AboutMe;