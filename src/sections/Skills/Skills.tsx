// Skills.tsx
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, faJs, faHtml5, faCss3Alt, faPhp, faJava, faNodeJs, 
  faPython, faGit, faWordpress 
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import CIcon from '@coreui/icons-react';
import { cibSwagger, cibPostman,cibTypescript } from '@coreui/icons';

interface Skill {
  name: string;
  category: string;
  icon?: any;       // FontAwesome icon
  coreIcon?: any;   // CoreUI icon
  logo?: string;    // Image path
  color: string;
}

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [glowIndex, setGlowIndex] = useState(0);

  const allSkills: Skill[] = [
    { name: 'React.js', category: 'Frontend', icon: faReact, color: '#D76C82' },
    { name: 'JavaScript', category: 'Frontend', icon: faJs, color: '#D76C82' },
    { name: 'HTML5', category: 'Frontend', icon: faHtml5, color: '#D76C82' },
    { name: 'CSS3', category: 'Frontend', icon: faCss3Alt, color: '#D76C82' },
    { name: 'TypeScript', category: 'Frontend', coreIcon: cibTypescript, color: '#D76C82' },
    { name: 'PHP', category: 'Backend', icon: faPhp, color: '#D76C82' },
    { name: 'Java', category: 'Backend', icon: faJava, color: '#D76C82' },
    { name: 'Node.js', category: 'Backend', icon: faNodeJs, color: '#D76C82' },
    { name: 'Python', category: 'Backend', icon: faPython, color: '#D76C82' },
    { name: 'MySQL', category: 'Database', icon: faDatabase, color: '#D76C82' },
    { name: 'WordPress', category: 'Tools', icon: faWordpress, color: '#D76C82' },
    { name: 'Git', category: 'Tools', icon: faGit, color: '#D76C82' },
    { name: 'Postman', category: 'Tools', coreIcon: cibPostman, color: '#D76C82' },
    { name: 'Swagger', category: 'Tools', coreIcon: cibSwagger, color: '#D76C82' },
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

  return (
    <Box
      minH="100vh"
      background="#EBE8DB"
      position="relative"
      py={20}
      overflow="hidden"
    >
      {/* Background glow effects */}
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top="80px"
          left="40px"
          w="128px"
          h="128px"
          bg="#B03052"
          opacity={0.1}
          borderRadius="full"
          filter="blur(48px)"
        />
        <Box
          position="absolute"
          bottom="80px"
          right="80px"
          w="160px"
          h="160px"
          bg="#D76C82"
          opacity={0.1}
          borderRadius="full"
          filter="blur(48px)"
        />
      </Box>

      <Container maxW="7xl" position="relative" zIndex={10}>
        {/* Title */}
        <VStack gap={6} mb={16} textAlign="center">
          <Heading
            color="#3D0301"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
          >
            Technical <Text as="span" color="#B03052">Skills</Text>
          </Heading>
          <Box w="80px" h="4px" bg="#D76C82" borderRadius="full" />
        </VStack>

        {/* Category Filters */}
        <HStack gap={4} justify="center" mb={12}>
          {categories.map((category) => (
            <Button
              key={category}
              bg={selectedCategory === category ? '#D76C82' : '#EBE8DB'}
              borderRadius="full"
              border="1px solid #D76C82"
              color={selectedCategory === category ? '#EBE8DB' : '#3D0301'}
              fontWeight="semibold"
              px={6}
              py={2}
              _hover={{ 
                bg: selectedCategory === category ? '#C95A78' : '#E5E2D5'
              }}
              transition="all 0.3s"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </HStack>

        {/* Skills Grid */}
        <Grid
          templateColumns={{ base: 'repeat(auto-fit, minmax(140px, 1fr))', md: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          gap={6}
        >
          {filteredSkills.map((skill, index) => {
            const isActive = glowIndex === index;
            const isHovered = activeSkill === skill.name;

            return (
              <GridItem
                key={skill.name}
                bg="#EBE8DB"
                borderRadius="2xl"
                border={isActive || isHovered ? `2px solid ${skill.color}` : '1px solid rgba(61, 3, 1, 0.3)'}
                p={6}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 40px ${skill.color}40`,
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
                    w="8px"
                    h="8px"
                    bg={skill.color}
                    borderRadius="full"
                    animation="ping 1s infinite"
                  />
                )}
                <VStack align="center" gap={3}>
                  {/* Icon rendering logic - FIXED */}
                  {skill.icon ? (
                    <Box display="flex" alignItems="center" justifyContent="center" w="64px" h="64px">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        size="3x"
                        color={skill.color}
                        style={{
                          filter: isActive || isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)',
                          transition: 'all 0.3s'
                        }}
                      />
                    </Box>
                  ) : skill.coreIcon ? (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="64px"
                      h="64px"
                    >
                      <CIcon
                        icon={skill.coreIcon}
                        width={48}
                        height={48}
                        color={skill.color}
                        style={{
                          filter: `brightness(${isActive || isHovered ? 1.1 : 0.9}) saturate(${isActive || isHovered ? 1.2 : 1})`,
                          transition: 'all 0.3s',
                          fill: skill.color // Fallback for SVG fill
                        }}
                      />
                    </Box>
                  ) : skill.logo ? (
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      boxSize="64px"
                      objectFit="contain"
                      filter={isActive || isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)'}
                      transition="all 0.3s"
                    />
                  ) : null}

                  {/* Skill name */}
                  <Text fontSize="md" fontWeight="semibold" color="#3D0301" textAlign="center">
                    {skill.name}
                  </Text>

                  {/* Skill category */}
                  <Text
                    fontSize="xs"
                    px={3}
                    py={1}
                    borderRadius="full"
                    border={`1px solid ${skill.color}`}
                    bg={isActive || isHovered ? `${skill.color}20` : '#EBE8DB'}
                    color={isActive || isHovered ? skill.color : '#3D0301'}
                  >
                    {skill.category}
                  </Text>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
      </Container>

      {/* Ping animation */}
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