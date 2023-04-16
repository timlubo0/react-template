import React from "react";
import { Box, Flex, Image, Stack, Text, Heading, useToast } from "@chakra-ui/react";
import LoginForm from "@/views/auth/components/LoginForm";
import { LoginBody, authService } from "@/services/auth";
import { useRouter } from "next/router";
import { Routes } from "@/navigation/Routes";

function LoginScreen(){

    const router = useRouter();
    const toast = useToast();

    const handleSubmit = (credentials: LoginBody) => {

        const login = authService.login(credentials);

        if(login.status ){
            router.push(Routes.messages);

            return null;
        }

        toast({
            title: 'Accès refusé.',
            description: "Verifiez vos identifiants.",
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
        });

    }

    return(
        <Box>
            <Flex minH={"100vh"}>
                <Box 
                    flex={{ base: 0, md: 2, lg: 2 }} 
                    sx={styles}
                    bg="gray.100"
                >
                    <Image src="/images/logo/logo-main.png" alt="logo" p={5} />
                </Box>
                <Box 
                    w={"full"}
                    flex={{ base: 3, md: 1, lg: 1 }} 
                    p={10}
                >
                    <Stack spacing={3}>
                        <Heading 
                            fontSize="24px" 
                            color={"#5e5873"}
                        >
                            Welcome To Ultimate SMS
                        </Heading>
                        <Flex w={"full"}>
                            <Text 
                                maxW={400}
                                color={"#6e6b7b"}
                                fontSize={"15px"}
                            >
                                Please sign-in to your account and start the adventure
                            </Text>
                        </Flex>
                        <Flex w={"full"} >
                            <LoginForm onSubmit={handleSubmit} />
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

const styles = {
    backgroundPosition: "center center",
    backgroundSize: "scale-down",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url('/images/pages/login-v2.svg')"
}

export default LoginScreen;