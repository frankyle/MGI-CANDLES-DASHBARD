// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/login',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/register',
          target: true
        }
        ,
        {
          id: 'mgiwebsitefree',
          title: 'Mgi Website Free',
          type: 'item',
          url: '/mgiwebsitefree',
          target: true
        }
        ,
        {
          id: 'mgiwebsitepaid',
          title: 'Mgi Website Paid',
          type: 'item',
          url: '/mgiwebsitepaid',
          target: true
        }
        ,
        {
          id: 'mgitutorialswebsite',
          title: 'Mgi Tutorials Website',
          type: 'item',
          url: '/mgitutorialswebsite',
          target: true
        }
      ]
    }
  ]
};

export default pages;
