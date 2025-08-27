import { Button } from '@chakra-ui/react';

interface MyButtonProps {
  text?: string;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function MyButton({
  text = 'Clique moi !',
  colorScheme = 'teal',
  size = 'lg',
  onClick,
}: Readonly<MyButtonProps>) {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      onClick={onClick}
      borderRadius="md"
      boxShadow="md"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
      transition="all 0.2s"
    >
      {text}
    </Button>
  );
}
