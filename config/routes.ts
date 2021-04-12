export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/app',
        component: '../layouts/AppLayout',
        routes: [
          {
            name: 'dindex',
            path: '/app/index',
            component: './Dindex',
          },
        ],
      },
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
            path: '/philosophy',
            name: 'philosophy',
            icon: 'smile',
            component: './Principle',
          },
          {
            path: '/announcements',
            name: 'announcements',
            icon: 'smile',
            component: './Principle',
          },
          {
            path: '/road-map',
            name: 'RoadMap',
            icon: 'smile',
            component: './Timeline',
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
