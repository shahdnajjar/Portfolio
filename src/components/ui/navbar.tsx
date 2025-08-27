
// Updated Navbar with new color scheme
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
      color="#3D0301"
      position="relative"
      transition="all 0.18s ease"
      _hover={{
        textDecoration: "none",
        color: "#D76C82",
        transform: "scale(1.03)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: 0,
        left: 0,
        background: "#D76C82",
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
        background="#EBE8DB"
        borderRadius="full"
        paddingX={8}
        paddingY={4}
        border="1px solid #bb9fa4ff"
        boxShadow="0 8px 32px rgba(61, 3, 1, 0.1)"
        position="relative"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" fontWeight="bold" fontSize="2xl">
            <Box
              color="#B03052"
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
            background="#D76C82"
            color="#EBE8DB"
            paddingX={6}
            paddingY={2}
            borderRadius="full"
            fontWeight="semibold"
            fontSize="sm"
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
              background="#D76C82"
              color="#EBE8DB"
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