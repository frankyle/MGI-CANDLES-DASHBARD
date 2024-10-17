// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Main Content',
  type: 'group',
  children: [
    {
      id: 'admin-operations',
      title: 'MGI Operations',
      type: 'collapse',
      icon: icons.IconPalette, // You can choose a different icon if preferred
      children: [
        {
          id: 'tradersideas',
          title: 'Traders Ideas',
          type: 'item',
          url: '/mtego/tradersideas',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'tradersideas-list',
          title: 'Traders Ideas List',
          type: 'item',
          url: '/mtego/tradersideas-list',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'mgistrategy',
          title: 'Mgi Strategy',
          type: 'item',
          url: '/mtego/mgistrategy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'mgistrategy-list',
          title: 'Mgi Strategy List',
          type: 'item',
          url: '/mtego/mgistrategy-list',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'trade-tracker',
          title: 'Trade Tracker',
          type: 'item',
          url: '/mtego/trade-tracker',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
      ]
    },
    {
      id: 'currency-operations',
      title: 'Currency Operations',
      type: 'collapse',
      icon: icons.IconPalette, // You can choose a different icon if preferred
      children: [
        
        {
          id: 'audusd',
          title: 'AUD USD',
          type: 'item',
          url: '/mtego/audusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'audnzd',
          title: 'AUD NZD',
          type: 'item',
          url: '/mtego/audnzd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'btcusd',
          title: 'BTC USD',
          type: 'item',
          url: '/mtego/btcusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'cadjpy',
          title: 'CAD JPY',
          type: 'item',
          url: '/mtego/cadjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'chfjpy',
          title: 'CHF JPY',
          type: 'item',
          url: '/mtego/chfjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'eurcad',
          title: 'EUR CAD',
          type: 'item',
          url: '/mtego/eurcad',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'eurchf',
          title: 'EUR CHF',
          type: 'item',
          url: '/mtego/eurchf',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'eurnzd',
          title: 'EUR NZD',
          type: 'item',
          url: '/mtego/eurnzd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'eurusd',
          title: 'EUR USD',
          type: 'item',
          url: '/mtego/eurusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'euraud',
          title: 'EUR AUD',
          type: 'item',
          url: '/mtego/euraud',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'eurjpy',
          title: 'EUR JPY',
          type: 'item',
          url: '/mtego/eurjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'gbpcad',
          title: 'GBP CAD',
          type: 'item',
          url: '/mtego/gbpcad',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'gbpchf',
          title: 'GBP CHF',
          type: 'item',
          url: '/mtego/gbpchf',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'gbpjpy',
          title: 'GBP JPY',
          type: 'item',
          url: '/mtego/gbpjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'gbpnzd',
          title: 'GBP NZD',
          type: 'item',
          url: '/mtego/gbpnzd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'gbpusd',
          title: 'GBP USD',
          type: 'item',
          url: '/mtego/gbpusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },

        
        {
          id: 'nzdcad',
          title: 'NZD CAD',
          type: 'item',
          url: '/mtego/nzdcad',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'nzdjpy',
          title: 'NZD JPY',
          type: 'item',
          url: '/mtego/nzdjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'nzdusd',
          title: 'NZD USD',
          type: 'item',
          url: '/mtego/nzdusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        },

        {
          id: 'usdcad',
          title: 'USD CAD',
          type: 'item',
          url: '/mtego/usdcad',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'usdchf',
          title: 'USD CHF',
          type: 'item',
          url: '/mtego/usdchf',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'usdjpy',
          title: 'USD JPY',
          type: 'item',
          url: '/mtego/usdjpy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'usdoil',
          title: 'USD OIL',
          type: 'item',
          url: '/mtego/usdoil',
          icon: icons.IconPalette,
          breadcrumbs: false
        },

        {
          id: 'xauusd',
          title: 'XAU USD',
          type: 'item',
          url: '/mtego/xauusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        }
      ]
    },
    // {
    //   id: 'admin-operations',
    //   title: 'TPC Operations',
    //   type: 'collapse',
    //   icon: icons.IconPalette, // You can choose a different icon if preferred
    //   children: [
    //     {
    //       id: 'newincident',
    //       title: 'New Incident',
    //       type: 'item',
    //       url: '/newincident',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'incident-list',
    //       title: 'All Incidents List',
    //       type: 'item',
    //       url: '/incident-list',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },
 
    //     {
    //       id: 'controllers',
    //       title: 'Controllers',
    //       type: 'item',
    //       url: '/controllers',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'cyclists',
    //       title: 'Cyclist',
    //       type: 'item',
    //       url: '/cyclists',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },

    //     {
    //       id: 'patrolmovement',
    //       title: 'Patrol Movements',
    //       type: 'item',
    //       url: '/patrolmovement',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },

    //     {
    //       id: 'qrfmovement',
    //       title: 'QRF Movements',
    //       type: 'item',
    //       url: '/qrfmovement',
    //       icon: icons.IconPalette,
    //       breadcrumbs: false
    //     },
        

    //   ]
    // },
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/utils/util-typography',
    //   icon: icons.IconTypography,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/utils/util-color',
    //   icon: icons.IconPalette,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/utils/util-shadow',
    //   icon: icons.IconShadow,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default utilities;
