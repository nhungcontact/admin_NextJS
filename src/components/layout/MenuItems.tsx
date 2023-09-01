import { Settings } from '@mui/icons-material';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: 1,
    title: 'Dashboard',
    icon: Settings,
    href: '/vi',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: 2,
    title: 'Typography',
    icon: Settings,
    href: '/vi/utilities/typography',
  },
  {
    id: 3,
    title: 'Shadow',
    icon: Settings,
    items: [
      {
        id: 1,
        title: 'Shadow',
        icon: Settings,
        href: '/vi/utilities/shadow',
      },
      {
        id: 2,
        title: 'Shadow',
        icon: Settings,
        href: '/vi/utilities/shadow1',
      }
    ],
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: 4,
    title: 'Login',
    icon: Settings,
    href: '/vi/authentication/login',
  },
  {
    id: 5,
    title: 'Register',
    icon: Settings,
    href: '/vi/authentication/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: 6,
    title: 'Icons',
    icon: Settings,
    href: '/vi/icons',
  },
  {
    id: 7,
    title: 'Sample Page',
    icon: Settings,
    href: '/vi/sample-page',
  },
];

export default Menuitems;
