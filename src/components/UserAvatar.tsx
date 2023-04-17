import {
  Flex,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Routes } from "@/navigation/Routes";
import { authService } from "@/services/auth";

function UserAvatar() {

    const router = useRouter();

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            authService.logout();
            router.push(Routes.login);
        }
    };

    return (
        <Flex alignItems={"center"}>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar size={"sm"} name="Tim Lubo" bg={"#7367F0"} />
                </MenuButton>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                    <MenuItem onClick={handleLogout}>Déconexion</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default UserAvatar;
