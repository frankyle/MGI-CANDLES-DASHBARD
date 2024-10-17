// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA WebsiteLinks MENU ITEMS ||============================== //

const websiteLinks = {
  id: 'websitelinks',
  title: 'Website Links',
  caption: 'websiteLinks Caption',
  type: 'group',
  children: [
    {
      id: 'websitelinks',
      title: 'Premium Account',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
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

export default websiteLinks;
