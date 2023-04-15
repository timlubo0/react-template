import { Routes } from "@/navigation/Routes";
import { NavItem } from "./types";

export const MENU: Array<NavItem> = [
    {
        label: 'Dashboard',
        href: Routes.home
    },
    {
        label: 'Messages',
        href: Routes.messages,
    },
    {
        label: 'Contacts',
        href: '#',
    },
    {
        label: 'Parametres',
        href: '#',
        children: [
        {
            label: 'Roles & Permissions',
            subLabel: 'Gestion des acces',
            href: '#',
        },
        {
            label: 'Utilisateurs',
            subLabel: 'gestion des users',
            href: '#',
        },
        ],
    },
];