import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { ReactNode } from 'react';
import Logo from '@/components/Logo';
import MainContent from './MainContent';
import { useRouter } from 'next/router';
import { Routes } from '@/navigation/Routes';
import UserAvatar from '@/components/UserAvatar';
  
export default function AppLayout({ children }: { children: ReactNode }) {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const excludeAppLayoutRoutes = [Routes.login];

  const showAppLayout = React.useMemo(() => {
    return !excludeAppLayoutRoutes.some((route) => router.pathname.startsWith(route));
  }, [router.pathname]);

  if(!showAppLayout) return <>{children}</>;

  return (
    <Box>
      <Flex
        bg={"#000"}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo p={0}/>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <UserAvatar />

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <MainContent>
        {children}
      </MainContent>
    </Box>
  );
}
  
  
  