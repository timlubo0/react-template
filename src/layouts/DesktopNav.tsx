import { Box, useColorModeValue, Stack, Popover, PopoverTrigger, PopoverContent, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MENU } from "../menu/menu";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.400', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.500', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const router = useRouter();

  const isActive = (href?: string) =>
    href === "/" ? router.pathname === href : router.pathname.startsWith(href || '');
  
  return (
    <Stack direction={'row'} spacing={4}>
      {MENU.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                bg={isActive(navItem.href) ? "#7367F0" : ''}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={isActive(navItem.href) ? '#fff' : linkColor }
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;