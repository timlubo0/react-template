import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Link, Flex } from "@chakra-ui/react";
import { MENU } from '@/menu/menu';
import { useRouter } from "next/router";

function AppBreadCrumb(){

    const { pathname } = useRouter();

    const navItem = MENU.find((menu) => menu.href === pathname);

    return(
        <Flex gap={5}>
            <Heading size={"md"}>{ navItem?.label }</Heading>
            <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href="#">
                    Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href='#'>
                    About
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default AppBreadCrumb;