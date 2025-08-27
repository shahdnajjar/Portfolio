import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Button,
  Image,
} from '@chakra-ui/react';

type ColorType = 'cyan' | 'yellow' | 'blue' | 'red' | 'purple' | 'green' | 'orange' | 'gray';

interface Skill {
  name: string;
  category: string;
  logo: string;
  color: ColorType;
}

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [glowIndex, setGlowIndex] = useState(0);

  const allSkills: Skill[] = [
    { name: 'React.js', category: 'Frontend', logo: '/src/assets/images/react.png', color: 'cyan' },
    { name: 'JavaScript', category: 'Frontend', logo: '/src/assets/images/javascript.png', color: 'yellow' },
    { name: 'HTML5', category: 'Frontend', logo: '/src/assets/images/html5.png', color: 'red' },
    { name: 'CSS3', category: 'Frontend', logo: '/src/assets/images/css3.png', color: 'blue' },
    { name: 'TypeScript', category: 'Frontend', logo: '/src/assets/images/typescript.png', color: 'blue' },
    { name: 'PHP', category: 'Backend', logo: '/src/assets/images/php.png', color: 'purple' },
    { name: 'Java', category: 'Backend', logo: '/src/assets/images/java.png', color: 'red' },
    { name: 'Node.js', category: 'Backend', logo: '/src/assets/images/nodejs.png', color: 'green' },
    { name: 'Express.js', category: 'Backend', logo: '/src/assets/images/express-js.png', color: 'gray' },
    { name: 'Python', category: 'Backend', logo: '/src/assets/images/python.png', color: 'yellow' },
    { name: 'MySQL', category: 'Database', logo: '/src/assets/images/mysql.png', color: 'blue' },
    { name: 'PostgreSQL', category: 'Database', logo: '/src/assets/images/postgresql.png', color: 'blue' },
    { name: 'WordPress', category: 'Tools', logo: '/src/assets/images/wordpress.png', color: 'blue' },
    { name: 'Git', category: 'Tools', logo: '/src/assets/images/git.png', color: 'red' },
    { name: 'Postman', category: 'Tools', logo: '/src/assets/images/postman.png', color: 'orange' },
    { name: 'Swagger', category: 'Tools', logo: '/src/assets/images/swagger.png', color: 'green' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % filteredSkills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [filteredSkills.length]);

  const getColorStyles = (color: ColorType) => {
    const colors = {
      cyan: { primary: '#A2AF9B', secondary: '#96A38F', light: '#B5C1A8', glow: 'rgba(162, 175, 155, 0.3)' },
      yellow: { primary: '#DCCFC0', secondary: '#D0C3B4', light: '#E5D8CC', glow: 'rgba(220, 207, 192, 0.3)' },
      blue: { primary: '#EEEEEE', secondary: '#E2E2E2', light: '#F5F5F5', glow: 'rgba(238, 238, 238, 0.3)' },
      red: { primary: '#A2AF9B', secondary: '#96A38F', light: '#B5C1A8', glow: 'rgba(162, 175, 155, 0.3)' },
      purple: { primary: '#DCCFC0', secondary: '#D0C3B4', light: '#E5D8CC', glow: 'rgba(220, 207, 192, 0.3)' },
      green: { primary: '#A2AF9B', secondary: '#96A38F', light: '#B5C1A8', glow: 'rgba(162, 175, 155, 0.3)' },
      orange: { primary: '#DCCFC0', secondary: '#D0C3B4', light: '#E5D8CC', glow: 'rgba(220, 207, 192, 0.3)' },
      gray: { primary: '#EEEEEE', secondary: '#E2E2E2', light: '#F5F5F5', glow: 'rgba(238, 238, 238, 0.3)' },
    };
    return colors[color] || colors.gray;
  };

  return (
    <Box
      minH="100vh"
      background="linear-gradient(135deg, #FAF9EE 0%, #EEEEEE 50%, #DCCFC0 100%)"
      position="relative"
      py={20}
      overflow="hidden"
    >
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top="80px"
          left="40px"
          width="128px"
          height="128px"
          background="#A2AF9B"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          top="160px"
          right="80px"
          width="192px"
          height="192px"
          background="#DCCFC0"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="80px"
          left="80px"
          width="160px"
          height="160px"
          background="#A2AF9B"
          opacity={0.3}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="128px"
          right="128px"
          width="96px"
          height="96px"
          background="#EEEEEE"
          opacity={0.3}
          borderRadius="full"
          filter="blur(32px)"
        />
      </Box>

      <Container maxWidth="7xl" position="relative" zIndex={10}>
        <VStack gap={6} marginBottom={16} textAlign="center">
          <Heading
            color="#4A5568"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
          >
            Technical <Text as="span" background="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)" backgroundClip="text">Skills</Text>
          </Heading>
          <Box
            width="80px"
            height="4px"
            background="linear-gradient(90deg, #A2AF9B 0%, #DCCFC0 100%)"
            borderRadius="full"
          />
        </VStack>

        <HStack gap={4} justifyContent="center" marginBottom={12}>
          {categories.map((category) => (
            <Button
              key={category}
              background={selectedCategory === category ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.5)'}
              backdropFilter="blur(20px)"
              borderRadius="full"
              border="1px solid"
              borderColor="rgba(162, 175, 155, 0.5)"
              color="#4A5568"
              fontWeight="semibold"
              paddingX={6}
              paddingY={2}
              _hover={{ background: 'rgba(255, 255, 255, 0.8)' }}
              transition="all 0.3s"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </HStack>

        <Grid
          templateColumns={{ base: 'repeat(auto-fit, minmax(140px, 1fr))', md: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          gap={6}
        >
          {filteredSkills.map((skill, index) => {
            const isActive = glowIndex === index;
            const isHovered = activeSkill === skill.name;
            const colors = getColorStyles(skill.color);

            return (
              <GridItem
                key={skill.name}
                background="rgba(255, 255, 255, 0.7)"
                backdropFilter="blur(20px)"
                borderRadius="2xl"
                border="1px solid"
                borderColor={isActive || isHovered ? colors.primary : 'rgba(162, 175, 155, 0.5)'}
                padding={6}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 40px ${colors.glow}`,
                }}
                cursor="pointer"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                position="relative"
              >
                {isActive && (
                  <Box
                    position="absolute"
                    top="12px"
                    right="12px"
                    width="8px"
                    height="8px"
                    background={colors.primary}
                    borderRadius="full"
                    animation="ping 1s infinite"
                  />
                )}
                <VStack alignItems="center" gap={3}>
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    boxSize="64px"
                    objectFit="contain"
                    filter={isActive || isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)'}
                    transition="all 0.3s"
                  />
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="#4A5568"
                    textAlign="center"
                  >
                    {skill.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    paddingX={3}
                    paddingY={1}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={isActive || isHovered ? colors.primary : 'rgba(162, 175, 155, 0.5)'}
                    background={isActive || isHovered ? `${colors.primary}20` : 'rgba(255, 255, 255, 0.5)'}
                    color={isActive || isHovered ? colors.light : '#4A5568'}
                  >
                    {skill.category}
                  </Text>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
      </Container>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="full"
        height="128px"
        background="linear-gradient(to top, rgba(250, 249, 238, 0.4) 0%, transparent 100%)"
      />
      
      <style>
        {`
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
};

export default Skills;