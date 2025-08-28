// File: sections/Contact/Contact.tsx
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  Text,
  Field,
} from '@chakra-ui/react';

const Contact = () => {
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
            Get in <Text as="span" color="#B03052">Touch</Text>
          </Heading>
          <Box w="80px" h="4px" bg="#D76C82" borderRadius="full" />
        </VStack>

        <Box
          bg="#EBE8DB"
          borderRadius="3xl"
          px={{ base: 4, md: 8 }}
          py={{ base: 6, md: 10 }}
          border="2px solid #cbabb1ff"
          boxShadow="0 8px 32px rgba(61, 3, 1, 0.1)"
          maxW={{ base: "100%", md: "600px" }}
          mx="auto"
          transition="all 0.3s"
          _hover={{ borderColor: '#c4a6aeff' }}
        >
          <VStack gap={{ base: 4, md: 6 }} align="start">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input
                type="text"
                placeholder="Your Name"
                bg="#FFF2EF"
                border="1px solid #d4b3baff"
                borderRadius="md"
                color="#3D0301"
                _focus={{ borderColor: '#B03052', boxShadow: '0 0 0 1px #B03052' }}
                size={{ base: "md", md: "lg" }}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                placeholder="Your Email"
                bg="#FFF2EF"
                border="1px solid #d4b3baff"
                borderRadius="md"
                color="#3D0301"
                _focus={{ borderColor: '#B03052', boxShadow: '0 0 0 1px #B03052' }}
                size={{ base: "md", md: "lg" }}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea
                placeholder="Your Message"
                bg="#FFF2EF"
                border="1px solid #d4b3baff"
                borderRadius="md"
                color="#3D0301"
                rows={5}
                _focus={{ borderColor: '#B03052', boxShadow: '0 0 0 1px #B03052' }}
                size={{ base: "md", md: "lg" }}
              />
            </Field.Root>

            <Button
              bg="#D76C82"
              color="#EBE8DB"
              borderRadius="full"
              px={{ base: 4, md: 8 }}
              py={{ base: 4, md: 6 }}
              fontWeight="semibold"
              _hover={{ bg: '#C95A78', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
              boxShadow="lg"
              w="full"
              size={{ base: "md", md: "lg" }}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;