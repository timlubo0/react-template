import React from "react";
import { Box, FormLabel, Input, Stack, Flex, Text, Checkbox, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { LoginBody } from "@/services/auth";

interface Props{
    onSubmit: (data: LoginBody) => void
}

function LoginForm({ onSubmit }: Props){

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        onSubmit: (data) => {
            onSubmit(data);
        },
    })
    
    return (
      <Box w={"full"}>
        <form onSubmit={formik.handleSubmit}>
            <Stack>
                <FormLabel fontSize={"12px"}>Username</FormLabel>
                <Input
                    placeholder="Username..."
                    onChange={(e) => formik.setFieldValue("username", e.target.value)}
                />
                <Flex direction={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <FormLabel fontSize={"12px"}>Password</FormLabel>
                        <Text fontSize={"12px"} color={"#6d62e4"}>
                            Forgot Password
                        </Text>
                    </Flex>
                    <Input
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => formik.setFieldValue("password", e.target.value)}
                    />
                </Flex>
                <Checkbox checked={true} fontSize={"14px"} color={"#6e6b7b"}>
                    Remember me
                </Checkbox>
                <Button bg={"#6d62e4"} color={"#fff"} type="submit">
                    Login
                </Button>
            </Stack>
        </form>
      </Box>
    );
}

export default LoginForm;