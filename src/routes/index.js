import IndexPage from '../pages/Index';
import RelationshipsPage from '../pages/Relationships';
import RequirementsPage from '../pages/Requirements';
import UsersPage from '../pages/Users';

const routes = [
  {
    title: 'About me',
    to: '/',
    mobile: false,
    component: IndexPage,
  },
  {
    title: 'Relationships',
    to: '/relationships',
    mobile: false,
    component: RelationshipsPage,
  },
  {
    title: 'Requirements',
    to: '/requirements',
    mobile: false,
    component: RequirementsPage,
  },
  {
    title: 'Users',
    to: '/users',
    mobile: false,
    component: UsersPage,
  },
  {
    title: 'Sign Up',
    to: '/signup',
    mobile: false,
    id: 'sign-up',
  },
  {
    title: 'How it works',
    to: '/how-it-works',
    mobile: true,
  },
  {
    title: 'Parthnership',
    to: '/parthnership',
    mobile: true,
  },
  {
    title: 'Help',
    to: '/help',
    mobile: true,
  },
  {
    title: 'Level testimonial',
    to: '/testimonial',
    mobile: true,
  },
  {
    title: 'Contact us',
    to: '/contact-us',
    mobile: true,
  },
  {
    title: 'Articles',
    to: '/articles',
    mobile: true,
  },
  {
    title: 'Our news',
    to: '/our-news',
    mobile: true,
  },
  {
    title: 'Testimonials',
    to: '/testimonials',
    mobile: true,
  },
  {
    title: 'Licences',
    to: '/licenses',
    mobile: true,
  },
  {
    title: 'Privary Policy',
    to: '/privacy-policy',
    mobile: true,
  },
];

export default routes;
