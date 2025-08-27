import React, { useRef } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

const Links = ["Home", "About Me", "Skills", "Services", "My Projects", "Reviews"];

type NavLinkProps = {
  children: string;
  onClick?: (epastel: React.MouseEvent) => void;
};

const NavLink = ({ children, onClick }: NavLinkProps) => {
  const id = children.toLowerCase().replace(/\s+/g, "");
  return (
    <Link
      paddingX={2}
      paddingY={1}
      borderRadius="md"
      href={`#${id}`}
      onClick={onClick}
      fontWeight="medium"
      fontSize="lg"
      color="#4A5568"
      position="relative"
      transition="all 0.18s ease"
      _hover={{
        textDecoration: "none",
        color: "#A2AF9B",
        transform: "scale(1.03)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: 0,
        left: 0,
        background: "#A2AF9B",
        transition: "width 0.28s ease",
      }}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const disclosure = useDisclosure();
  const isOpen: boolean = (disclosure as any).isOpen ?? (disclosure as any).open ?? false;
  const onToggle: () => void =
    (disclosure as any).onToggle ?? (disclosure as any).toggle ?? (() => {});

  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick =
    (anchorId: string) =>
    (e: React.MouseEvent) => {
      e.preventDefault();
      const target = document.getElementById(anchorId);
      if (!target) return;
      const headerHeight = navbarRef.current?.offsetHeight ?? 80;
      const extraSpacing = 12;
      const targetY =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraSpacing;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      if (isOpen) {
        onToggle();
      }
    };

  return (
    <Box position="absolute" top={0} left={0} right={0} zIndex={20} paddingX={8} paddingY={6}>
      <Box
        ref={navbarRef}
        background="rgba(255, 255, 255, 0.7)"
        backdropFilter="blur(20px)"
        borderRadius="full"
        paddingX={8}
        paddingY={4}
        border="1px solid rgba(162, 175, 155, 0.5)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
        position="relative"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" fontWeight="bold" fontSize="2xl">
            <Box
              background="linear-gradient(to right, #A2AF9B, #DCCFC0)"
              backgroundClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              S
            </Box>
          </Flex>

          <HStack gap={8} display={{ base: "none", md: "flex" }} alignItems="center">
            {Links.map((link) => {
              const id = link.toLowerCase().replace(/\s+/g, "");
              return (
                <NavLink key={link} onClick={handleNavClick(id)}>
                  {link}
                </NavLink>
              );
            })}
          </HStack>

          <Button
            background="linear-gradient(to right, #A2AF9B, #DCCFC0)"
            color="#4A5568"
            paddingX={6}
            paddingY={2}
            borderRadius="full"
            fontWeight="semibold"
            fontSize="sm"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 12px 25px rgba(162, 175, 155, 0.4)",
            }}
            transition="all 0.3s"
            display={{ base: "none", md: "inline-flex" }}
            onClick={handleNavClick("contact")}
          >
            Contact
          </Button>

          <IconButton
            aria-label="Menu"
            background="rgba(255, 255, 255, 0.7)"
            backdropFilter="blur(20px)"
            color="#4A5568"
            borderRadius="xl"
            border="1px solid rgba(162, 175, 155, 0.5)"
            _hover={{ background: "rgba(255, 255, 255, 0.8)" }}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </IconButton>
        </Flex>

        <Box
          display={{ md: "none" }}
          maxHeight={isOpen ? "360px" : "0px"}
          overflow="hidden"
          transition="max-height 220ms ease"
          marginTop={4}
        >
          <VStack alignItems="start" gap={4} paddingLeft={4} paddingBottom={4} paddingRight={4}>
            {Links.map((link) => {
              const id = link.toLowerCase().replace(/\s+/g, "");
              return (
                <NavLink key={link} onClick={handleNavClick(id)}>
                  {link}
                </NavLink>
              );
            })}
            <Button
              width="200px"
              background="linear-gradient(to right, #A2AF9B, #DCCFC0)"
              color="#4A5568"
              borderRadius="full"
              fontWeight="semibold"
              fontSize="sm"
              onClick={handleNavClick("contact")}
            >
              Contact
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}