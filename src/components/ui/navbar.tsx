// File: components/ui/navbar.tsx
import React, { useRef } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

const Links = ["Home", "About Me", "Skills", "My Projects"];

type NavLinkProps = {
  children: string;
  onClick?: (e: React.MouseEvent) => void;
  isMobile?: boolean;
};

const NavLink = ({ children, onClick, isMobile = false }: NavLinkProps) => {
  const id = children.toLowerCase().replace(/\s+/g, "");
  return (
    <Link
      px={isMobile ? 4 : { base: 1, md: 2 }}
      py={isMobile ? 3 : 1}
      borderRadius={isMobile ? "xl" : "md"}
      href={`#${id}`}
      onClick={onClick}
      fontWeight={isMobile ? "semibold" : "medium"}
      fontSize={isMobile ? "lg" : { base: "md", md: "lg" }}
      color={isMobile ? "#3D0301" : "#3D0301"}
      position="relative"
      transition="all 0.18s ease"
      width={isMobile ? "full" : "auto"}
      _hover={{
        textDecoration: "none",
        color: isMobile ? "#D76C82" : "#D76C82",
        transform: isMobile ? "translateX(8px)" : "scale(1.03)",
        bg: isMobile ? "rgba(235, 232, 219, 0.1)" : "transparent",
      }}
      _after={!isMobile ? {
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: 0,
        left: 0,
        background: "#D76C82",
        transition: "width 0.28s ease",
      } : {}}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
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
        setIsOpen(false);
      }
    };

  return (
    <>
      {/* Backdrop Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(61, 3, 1, 0.5)"
        zIndex={25}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        transition="all 0.3s ease"
        display={{ base: "block", md: "none" }}
        onClick={() => setIsOpen(false)}
        backdropFilter="blur(4px)"
      />

      {/* Mobile Sidebar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        height="100vh"
        width="66.666667%"
        bg="#EBE8DB"
        zIndex={30}
        transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s ease"
        display={{ base: "block", md: "none" }}
        boxShadow="4px 0 20px rgba(0, 0, 0, 0.15)"
      >
        <VStack
          alignItems="start"
          gap={6}
          px={6}
          pt={20}
          height="full"
          position="relative"
        >
          {/* Close Button */}
          <IconButton
            aria-label="Close Menu"
            position="absolute"
            top={4}
            right={4}
            bg="rgba(235, 232, 219, 0.2)"
            color="#EBE8DB"
            borderRadius="xl"
            _hover={{ bg: "rgba(235, 232, 219, 0.3)" }}
            onClick={() => setIsOpen(false)}
            size="sm"
          >
            <X size={18} />
          </IconButton>

          {/* Logo */}
          <Box
            color="#D76C82"
            fontSize="3xl"
            fontWeight="extrabold"
            mb={4}
          >
            Shahd
          </Box>

          {/* Navigation Links */}
          {Links.map((link) => {
            const id = link.toLowerCase().replace(/\s+/g, "");
            return (
              <NavLink key={link} onClick={handleNavClick(id)} isMobile={true}>
                {link}
              </NavLink>
            );
          })}

          {/* Contact Button */}
          <Button
            width="full"
            maxW="200px"
            background="#EBE8DB"
            color="#3D0301"
            borderRadius="full"
            fontWeight="bold"
            fontSize="lg"
            onClick={handleNavClick("contact")}
            py={3}
            mt={4}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(235, 232, 219, 0.3)",
            }}
            transition="all 0.3s"
          >
            Contact
          </Button>
        </VStack>
      </Box>

      {/* Main Navbar */}
      <Box
        position={{ base: "fixed", md: "absolute" }}
        top={0}
        left={0}
        right={0}
        zIndex={20}
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 6 }}
        bg={{ base: "#EBE8DB", md: "transparent" }}
      >
        <Box
          ref={navbarRef}
          background="#EBE8DB"
          borderRadius="full"
          px={{ base: 4, md: 8 }}
          py={{ base: 3, md: 4 }}
          border="1px solid #bb9fa4ff"
          boxShadow="0 8px 32px rgba(61, 3, 1, 0.1)"
          position="relative"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
              <Box
                color="#B03052"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="extrabold"
              >
                S
              </Box>
            </Flex>

            <HStack gap={{ base: 4, md: 8 }} display={{ base: "none", md: "flex" }} alignItems="center">
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
              background="#D76C82"
              color="#3D0301"
              px={{ base: 4, md: 6 }}
              py={{ base: 1, md: 2 }}
              borderRadius="full"
              fontWeight="semibold"
              fontSize={{ base: "xs", md: "sm" }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 12px 25px rgba(215, 108, 130, 0.4)",
                background: "#C95A78"
              }}
              transition="all 0.3s"
              display={{ base: "none", md: "inline-flex" }}
              onClick={handleNavClick("contact")}
            >
              Contact
            </Button>

            <IconButton
              aria-label="Menu"
              background="#EBE8DB"
              color="#3D0301"
              borderRadius="xl"
              border="1px solid #89676eff"
              _hover={{ background: "#E5E2D5" }}
              display={{ base: "flex", md: "none" }}
              onClick={() => setIsOpen(!isOpen)}
              size={{ base: "sm", md: "md" }}
            >
              <Menu size={18} />
            </IconButton>
          </Flex>
        </Box>
      </Box>
    </>
  );
}