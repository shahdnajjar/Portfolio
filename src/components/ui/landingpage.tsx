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

const LandingPage = () => {
  return (
    <Box
      h="100vh"
      bg="linear-gradient(135deg, #FAF9EE 0%, #EEEEEE 50%, #DCCFC0 100%)"
      position="relative"
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

      <Box maxW="full" px={8} py={12} position="relative" zIndex={10}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
          align="center"
          minH="100vh"
          maxW="7xl"
          mx="auto"
        >
          <VStack align={{ base: 'center', lg: 'start' }} spaceY={8} flex={1}>
            <VStack align={{ base: 'center', lg: 'start' }} spaceY={4}>
              <VStack align={{ base: 'center', lg: 'start' }} spaceY={2}>
                <Heading
                  color="#4A5568"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="bold"
                  textAlign={{ base: 'center', lg: 'left' }}
                  lineHeight="1.1"
                >
                  Hi, I'm Shahd Najjar
                </Heading>
                
                <Flex align="baseline" gap={3} wrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                  <Heading
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="bold"
                    bg="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)"
                    bgClip="text"
                    color="transparent"
                    lineHeight="1.3"
                  >
                    Full-Stack
                  </Heading>
                  <Heading
                    color="#4A5568"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="bold"
                  >
                    Developer
                  </Heading>
                </Flex>
              </VStack>
              
              <Text
                color="#4A5568"
                opacity={0.6}
                fontSize="lg"
                maxW="md"
                lineHeight="relaxed"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Second-year Computer Science student passionate about web development and digital project management. I create robust and user-friendly web applications, transforming ideas into efficient digital solutions.
              </Text>
            </VStack>

            <HStack spaceX={4} wrap="wrap" justify={{ base: 'center', lg: 'start' }}>
              <Button
                bg="#DCCFC0"
                color="#4A5568"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: '#D0C3B4' }}
                transition="all 0.3s"
                boxShadow="lg"
                size="lg"
              >
                My Projects
              </Button>
              <Button
                variant="outline"
                bg="rgba(255, 255, 255, 0.7)"
                color="#4A5568"
                borderColor="rgba(162, 175, 155, 0.5)"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
                transition="all 0.3s"
                size="lg"
              >
                <Download size={18} style={{ marginRight: '8px' }} />
                Download CV
              </Button>
            </HStack>

            <HStack spaceX={4}>
              <IconButton
                aria-label="GitHub"
                w={12}
                h={12}
                bg="rgba(255, 255, 255, 0.7)"
                color="#4A5568"
                borderRadius="full"
                _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
                transition="all 0.3s"
                backdropFilter="blur(10px)"
              >
                <Github size={20} />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                w={12}
                h={12}
                bg="rgba(255, 255, 255, 0.7)"
                color="#4A5568"
                borderRadius="full"
                _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
                transition="all 0.3s"
                backdropFilter="blur(10px)"
              >
                <Linkedin size={20} />
              </IconButton>
              <IconButton
                aria-label="Email"
                w={12}
                h={12}
                bg="rgba(255, 255, 255, 0.7)"
                color="#4A5568"
                borderRadius="full"
                _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
                transition="all 0.3s"
                backdropFilter="blur(10px)"
              >
           #     <Mail size={20} />
              </IconButton>
              <IconButton
                aria-label="Dribbble"
                w={12}
                h={12}
                bg="rgba(255, 255, 255, 0.7)"
                color="#4A5568"
                borderRadius="full"
                _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
                transition="all 0.3s"
                backdropFilter="blur(10px)"
              >
                <Dribbble size={20} />
              </IconButton>
            </HStack>
          </VStack>

          <Flex justify={{ base: 'center', lg: 'end' }} flex={1}>
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
                  speed={0.8}
                  src="src\assets\animations\Web Development.json"
                  style={{ width: '500px', height: '500px' }}
                />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box maxW="full" px={8} py={16} position="relative" zIndex={10}>
        <VStack spaceY={4} maxW="7xl" mx="auto">
          <Heading color="#4A5568" fontSize="3xl" fontWeight="bold">
            About me
          </Heading>
          <Box
            w="80px"
            h="4px"
            bg="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)"
            borderRadius="full"
          />
        </VStack>
      </Box>

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

export default LandingPage;