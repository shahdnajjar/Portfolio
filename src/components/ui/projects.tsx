import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Grid,
  GridItem,
  Button,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
  Badge,
} from '@chakra-ui/react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Application desktop de Gestion de Restaurant',
    description: 'Développement d’une application de bureau pour la gestion des commandes, des tables, du menu et de la facturation dans un restaurant. Interface utilisateur conçue avec JavaFX et base de données relationnelle MySQL pour stocker les informations clients, plats et commandes.',
    category: 'Desktop Development',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 2,
    title: 'Paradice – Application web de Gestion de Stock',
    description: 'Développement d’une application web interne pour une entreprise de fabrication de glace. Elle permet la gestion des entrées/sorties de stock, le suivi des produits finis et matières premières. Back-end conçu avec Node.js, front-end développé en React.js avec une interface intuitive. Tests d’API et validation fonctionnelle réalisés avec Postman. Données stockées dans une base PostgreSQL.',
    category: 'Web Development',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 3,
    title: 'Cosmos Delivery – Application Web de Livraison',
    description: 'Développement d’une application web complète de gestion de livraisons. L’application gère plusieurs rôles : Client, Service Client, Livreur, Administrateur. Back-end construit avec Node.js et Express.js, base de données PostgreSQL. Documentation interactive générée avec Swagger. Tests d’API réalisés avec Postman. Interface utilisateur développée en React.js.',
    category: 'Web Development',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing creative projects with a focus on modern aesthetics.',
    category: 'Web Development',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Desktop Development', 'Web Development'];

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <Box
      minH="100vh"
      bgGradient="to-br"
      gradientFrom="#FAF9EE"
      gradientVia="#EEEEEE"
      gradientTo="#DCCFC0"
      position="relative"
      py={20}
      overflow="hidden"
      id="myprojects"
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
            size={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            My Projects
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="to-r"
            gradientFrom="#A2AF9B"
            gradientTo="#DCCFC0"
            borderRadius="full"
          />
        </VStack>

        <HStack gap={4} justify="center" mb={12}>
          {categories.map((category) => (
            <Button
              key={category}
              bg={filter === category ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.5)'}
              backdropFilter="blur(20px)"
              borderRadius="full"
              border="1px solid"
              borderColor="rgba(162, 175, 155, 0.5)"
              color="#4A5568"
              fontWeight="semibold"
              px={6}
              py={2}
              _hover={{ bg: 'rgba(255, 255, 255, 0.8)' }}
              transition="all 0.3s"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </HStack>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
        >
          {filteredProjects.map((project) => (
            <GridItem key={project.id}>
              <DialogRoot>
                <DialogTrigger asChild>
                  <Box
                    bg="rgba(255, 255, 255, 0.7)"
                    backdropFilter="blur(20px)"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="rgba(162, 175, 155, 0.5)"
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                    p={6}
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    }}
                    cursor="pointer"
                  >
                    <Box
                      w="full"
                      h="200px"
                      bgGradient="to-br"
                      gradientFrom="#A2AF9B"
                      gradientTo="#DCCFC0"
                      borderRadius="xl"
                      mb={4}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden"
                    >
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                        />
                      ) : (
                        <Text color="#4A5568" opacity={0.6} fontSize="sm">
                          Project Preview
                        </Text>
                      )}
                    </Box>
                    <VStack align="start" gap={3}>
                      <Badge
                        bgGradient="to-r"
                        gradientFrom="#A2AF9B"
                        gradientTo="#DCCFC0"
                        color="#4A5568"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {project.category}
                      </Badge>
                      <Heading color="#4A5568" size="xl" fontWeight="bold">
                        {project.title}
                      </Heading>
                      <Text color="#4A5568" opacity={0.6} fontSize="sm" lineClamp={2}>
                        {project.description}
                      </Text>
                    </VStack>
                  </Box>
                </DialogTrigger>
                
                <DialogContent
                  bg="rgba(255, 255, 255, 0.7)"
                  backdropFilter="blur(20px)"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="rgba(162, 175, 155, 0.5)"
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                  maxW="xl"
                >
                  <DialogHeader>
                    <Heading color="#4A5568" size="2xl" fontWeight="bold">
                      {project.title}
                    </Heading>
                    <DialogCloseTrigger color="#4A5568" />
                  </DialogHeader>
                  <DialogBody pb={6}>
                    <VStack gap={4} align="start">
                      {project.image && (
                        <Box
                          w="full"
                          h="300px"
                          bgGradient="to-br"
                          gradientFrom="#A2AF9B"
                          gradientTo="#DCCFC0"
                          borderRadius="xl"
                          overflow="hidden"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Box>
                      )}
                      <Badge
                        bgGradient="to-r"
                        gradientFrom="#A2AF9B"
                        gradientTo="#DCCFC0"
                        color="#4A5568"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {project.category}
                      </Badge>
                      <Text color="#4A5568" opacity={0.6} fontSize="md">
                        {project.description}
                      </Text>
                      <Button
                        as="a"
                        bgGradient="to-r"
                        gradientFrom="#A2AF9B"
                        gradientTo="#DCCFC0"
                        color="#4A5568"
                        borderRadius="full"
                        px={6}
                        py={2}
                        _hover={{ 
                          bgGradient: "to-r",
                          gradientFrom: "#96A38F",
                          gradientTo: "#D0C3B4"
                        }}
                      >
                        View Project
                      </Button>
                    </VStack>
                  </DialogBody>
                </DialogContent>
              </DialogRoot>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="full"
        h="128px"
        bgGradient="to-t"
        gradientFrom="#FAF9EE"
        gradientTo="transparent"
      />
    </Box>
  );
};

export default Projects;