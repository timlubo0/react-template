import { Image } from "@chakra-ui/react";

const Logo = ({...props}) => (
    <Image src="/images/logo/logo-main.png" alt="logo" p={5} {...props}/>
)

export default Logo;