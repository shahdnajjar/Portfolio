import { Box, Container, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { CIcon } from '@coreui/icons-react';
import { cibGithub, cibLinkedinIn, cibGmail, cibWhatsapp } from '@coreui/icons';

const Footer = () => {
  return (
    <Box
      bg="#D76C82"
      color="#EBE8DB"
      py={{ base: "32px", md: "48px" }}
      position="relative"
      borderTop="1px solid #D76C82"
    >
      <Container maxW={{ base: "90%", md: "1280px" }}>
        <VStack gap={{ base: "24px", md: "32px" }} align="center">
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="medium"
            textAlign="center"
          >
            &copy; {new Date().getFullYear()} Shahd Najjar. All rights reserved.
          </Text>
          
          <HStack gap={{ base: "16px", md: "24px" }}>
            <Link
              href="https://github.com/shahdnajjar"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
              transition="all 0.3s"
            >
              <CIcon
                icon={cibGithub}
                size="lg"
                style={{
                  fill: "#3D0301",
                  transition: "all 0.3s",
                  width: "28px",
                  height: "28px",
                }}
              />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/shahd-najjar-5228a620a"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
              transition="all 0.3s"
            >
              <CIcon
                icon={cibLinkedinIn}
                size="lg"
                style={{
                  fill: "#3D0301",
                  transition: "all 0.3s",
                  width: "28px",
                  height: "28px",
                }}
              />
            </Link>
            
            <Link
              href="mailto:shahdnajjar50@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
              transition="all 0.3s"
            >
              <CIcon
                icon={cibGmail}
                size="lg"
                style={{
                  fill: "#3D0301",
                  transition: "all 0.3s",
                  width: "28px",
                  height: "28px",
                }}
              />
            </Link>
            
            <Link
              href="https://wa.me/+21694243333"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
              transition="all 0.3s"
            >
              <CIcon
                icon={cibWhatsapp}
                size="lg"
                style={{
                  fill: "#3D0301",
                  transition: "all 0.3s",
                  width: "28px",
                  height: "28px",
                }}
              />
            </Link>
          </HStack>
          
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            opacity={0.8}
            textAlign="center"
          >
            Built with passion by Shahd Najjar
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;