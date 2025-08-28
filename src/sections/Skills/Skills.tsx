// File: sections/Skills/Skills.tsx
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
import { cibSwagger, cibPostman, cibTypescript } from '@coreui/icons';

interface Skill {
  name: string;
  category: string;
  icon?: any;
  coreIcon?: any;
  logo?: string;
  color: string;
}

// Extracted component for skill icon rendering
const SkillIcon = ({ skill, isActive, isHovered }: { skill: Skill; isActive: boolean; isHovered: boolean }) => {
  const iconFilter = isActive || isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)';
  const iconSize = { base: "48px", md: "64px" };

  if (skill.icon) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" w={iconSize} h={iconSize}>
        <FontAwesomeIcon
          icon={skill.icon}
          size="2x"
          color={skill.color}
          style={{ filter: iconFilter, transition: 'all 0.3s' }}
        />
      </Box>
    );
  }

  if (skill.coreIcon) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" w={iconSize} h={iconSize}>
        <CIcon
          icon={skill.coreIcon}
          width={48}
          height={48}
          color={skill.color}
          style={{
            filter: `brightness(${isActive || isHovered ? 1.1 : 0.9}) saturate(${isActive || isHovered ? 1.2 : 1})`,
            transition: 'all 0.3s',
            fill: skill.color
          }}
        />
      </Box>
    );
  }

  if (skill.logo) {
    return (
      <Image
        src={skill.logo}
        alt={`${skill.name} logo`}
        boxSize={iconSize}
        objectFit="contain"
        filter={iconFilter}
        transition="all 0.3s"
      />
    );
  }

  return null;
};

// Extracted component for skill card
const SkillCard = ({ 
  skill, 
  index, 
  glowIndex, 
  activeSkill, 
  setActiveSkill 
}: { 
  skill: Skill; 
  index: number; 
  glowIndex: number; 
  activeSkill: string | null; 
  setActiveSkill: (name: string | null) => void; 
}) => {
  const isActive = glowIndex === index;
  const isHovered = activeSkill === skill.name;

  return (
    <GridItem
      key={skill.name}
      bg="#EBE8DB"
      borderRadius="2xl"
      border={isActive || isHovered ? `2px solid ${skill.color}` : '1px solid rgba(61, 3, 1, 0.3)'}
      p={{ base: 4, md: 6 }}
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
          top={{ base: "8px", md: "12px" }}
          right={{ base: "8px", md: "12px" }}
          w="8px"
          h="8px"
          bg={skill.color}
          borderRadius="full"
          animation="ping 1s infinite"
        />
      )}
      <VStack align="center" gap={{ base: 2, md: 3 }}>
        <SkillIcon skill={skill} isActive={isActive} isHovered={isHovered} />

        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold" color="#3D0301" textAlign="center">
          {skill.name}
        </Text>

        <Text
          fontSize={{ base: "xs", md: "xs" }}
          px={{ base: 2, md: 3 }}
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
};

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
          bottom={{ base: "40px", md: "80px" }}
          right={{ base: "20px", md: "80px" }}
          w={{ base: "100px", md: "160px" }}
          h={{ base: "100px", md: "160px" }}
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
            Technical <Text as="span" color="#B03052">Skills</Text>
          </Heading>
          <Box w="80px" h="4px" bg="#D76C82" borderRadius="full" />
        </VStack>

        <HStack gap={{ base: 2, md: 4 }} justify="center" mb={{ base: 8, md: 12 }} flexWrap="wrap">
          {categories.map((category) => (
            <Button
              key={category}
              bg={selectedCategory === category ? '#D76C82' : '#EBE8DB'}
              borderRadius="full"
              border="1px solid #D76C82"
              color={selectedCategory === category ? '#EBE8DB' : '#3D0301'}
              fontWeight="semibold"
              px={{ base: 4, md: 6 }}
              py={{ base: 1, md: 2 }}
              _hover={{ 
                bg: selectedCategory === category ? '#C95A78' : '#E5E2D5'
              }}
              transition="all 0.3s"
              onClick={() => setSelectedCategory(category)}
              size={{ base: "sm", md: "md" }}
            >
              {category}
            </Button>
          ))}
        </HStack>

        <Grid
          templateColumns={{ base: 'repeat(auto-fit, minmax(120px, 1fr))', sm: 'repeat(auto-fit, minmax(140px, 1fr))', md: 'repeat(auto-fit, minmax(160px, 1fr))' }}
          gap={{ base: 4, md: 6 }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              glowIndex={glowIndex}
              activeSkill={activeSkill}
              setActiveSkill={setActiveSkill}
            />
          ))}
        </Grid>
      </Container>

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