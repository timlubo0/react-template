import { Box, Heading } from "@chakra-ui/react";
import AppBreadCrumb from "./AppBreadcrumb";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { MENU } from "../menu/menu";

interface Props{
    children: ReactNode
}

function MainContent({ children }: Props){

    const { pathname } = useRouter();

    const navItem = MENU.find((menu) => menu.href === pathname);
    
    return(
        <Box bg={"gray.100"} minH={"100vh"} w={"full"}>
          <Box px={10} py={8}>
            <AppBreadCrumb />
          </Box>

          <Box 
            mx={10}
            minH={"100vh"}
            bg={"#fff"}
            borderTopRadius={5}
          >
            <Box 
                h={50} 
                bg={"blackAlpha.900"} 
                borderTopRadius={5}
            >
                <Heading size={"md"} color={"#fff"} p={2}>{navItem?.label}</Heading>
            </Box>
            {children}
          </Box>
        </Box>
    )
}

export default MainContent;