export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/MainLayout',
        routes: [
          {
            path: '/',
            redirect: '/home',
          },
          {
            path: '/home',
            name: 'home',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/glossary',
            name: 'glossary',
            icon: 'smile',
            component: './Glossary',
          },
          {
            path: '/about',
            name: 'about',
            icon: 'smile',
            component: './About',
          },
          {
            path: '/faq',
            name: 'faq',
            icon: 'smile',
            component: './FAQ',
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
