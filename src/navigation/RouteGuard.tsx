import { Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { useAuth } from '@/hooks/auth';
import { publicRoutes } from './Routes';
import AppLayout from '@/layouts/AppLayout';

const RouteGuard = (props: {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) => {
    const { children } = props;

    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const user = useAuth();

    useEffect(() => {
        const authCheck = () => {
            if (!user.isLoggedIn && !publicRoutes.includes(router.asPath.split('?')[0])) {
                setAuthorized(false);
                void router.push({
                pathname: '/login',
                });
            } else {
                setAuthorized(true);
            }
        };

        authCheck();

        const preventAccess = () => setAuthorized(false);

        router.events.on('routeChangeStart', preventAccess);
        router.events.on('routeChangeComplete', authCheck);

        return () => {
            router.events.off('routeChangeStart', preventAccess);
            router.events.off('routeChangeComplete', authCheck);
        };
    }, [router, router.events, user]);

    return authorized ? (
        <AppLayout>{children}</AppLayout>
    ) : (
        <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
            <Spinner size="xl" />
        </Flex>
    );
};

export default RouteGuard;