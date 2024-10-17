import { lazy } from 'react';


import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Cyclists from 'views/utilities/Tpc_Operation/Guards/Cyclists';
import QRFMovement from 'views/utilities/Tpc_Operation/QRF/QRFMovement';
import Xau_Usd from 'views/utilities/Website_Post/Currencies/Individual/Xau_Usd';
import Eur_Usd from 'views/utilities/Website_Post/Currencies/Individual/Eur_Usd';
import Eur_Nzd from 'views/utilities/Website_Post/Currencies/Individual/Eur_Nzd';
import Eur_Chf from 'views/utilities/Website_Post/Currencies/Individual/Eur_Chf';
import Eur_Cad from 'views/utilities/Website_Post/Currencies/Individual/Eur_Cad';
import Chf_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Chf_Jpy';
import Cad_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Cad_Jpy';
import Btc_Usd from 'views/utilities/Website_Post/Currencies/Individual/Btc_Usd';
import Aud_Usd from 'views/utilities/Website_Post/Currencies/Individual/Aud_Usd';
import Aud_Nzd from 'views/utilities/Website_Post/Currencies/Individual/Aud_Nzd';
import Usd_Oil from 'views/utilities/Website_Post/Currencies/Individual/Usd_Oil';
import Usd_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Usd_Jpy';
import Usd_Chf from 'views/utilities/Website_Post/Currencies/Individual/Usd_Chf';
import Usd_Cad from 'views/utilities/Website_Post/Currencies/Individual/Usd_Cad';
import Nzd_Usd from 'views/utilities/Website_Post/Currencies/Individual/Nzd_Usd';
import Nzd_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Nzd_Jpy';
import Nzd_Cad from 'views/utilities/Website_Post/Currencies/Individual/Nzd_Cad';
import Gbp_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Gbp_Jpy';
import Gbp_Aud from 'views/utilities/Website_Post/Currencies/Individual/Gbp_Aud';
import Gbp_Cad from 'views/utilities/Website_Post/Currencies/Individual/Gbp_Cad';
import Gbp_Usd from 'views/utilities/Website_Post/Currencies/Individual/Gbp_USd';
import Gbp_USd from 'views/utilities/Website_Post/Currencies/Individual/Gbp_USd';
import Eur_Jpy from 'views/utilities/Website_Post/Currencies/Individual/Eur_Jpy';
import Eur_Aud from 'views/utilities/Website_Post/Currencies/Individual/Eur_Aud';
import Gbp_Chf from 'views/utilities/Website_Post/Currencies/Individual/Gbp_Chf';
import Gbp_Nzd from 'views/utilities/Website_Post/Currencies/Individual/Gbp_Nzd';
import MgiStrategyView from 'views/utilities/Website_Post/MgiCandles/MgiStrategyView';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// MGI components
const TradersIdeas = Loadable(lazy(() => import('views/utilities/Website_Post/TradersIdea/TradersIdeas')));
const TradersIdeasList = Loadable(lazy(() => import('views/utilities/Website_Post/TradersIdea/TradersIdeasList')));
const MgiStrategyList = Loadable(lazy(() => import('views/utilities/Website_Post/MgiCandles/MgiStrategyList')));
const MgiStrategy = Loadable(lazy(() => import('views/utilities/Website_Post/MgiCandles/MgiStategy')));
const IncidentsView = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/IncidentsView')));
const TradingTracker = Loadable(lazy(() => import('views/utilities/Website_Post/TradeTracker/TradingTracker')));

// TPC imports
const IncidentsList = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/IncidentsList')));
const Incidents = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/Incidents')));
const PatrolMovement = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Patrol/PatrolMovement')));
const Controllers = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Guards/Controllers')));


// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  
  path: '/mtego/',
  element: <MainLayout />,
  children: [
    {
      path: '/mtego/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        },
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    // Add new mgi here
    {
      path: 'tradersideas',
      element: <TradersIdeas />
    },
    {
      path: 'tradersideas-list',
      element: <TradersIdeasList />
    },
    {
      path: 'mgistrategy',
      element: <MgiStrategy />
    },
    {
      path: 'mgistrategy-list',
      element: <MgiStrategyList />
    },
    {
      path: 'mgistrategy/view/:id', // <-- Add the new route here
      element: <MgiStrategyView />   // <-- Component to view a single candle
    },
    {
      path: 'trade-tracker',
      element: <TradingTracker />
    },
    {
      path: 'audnzd',
      element: <Aud_Nzd />
    },
    {
      path: 'audusd',
      element: <Aud_Usd />
    },
   
    {
      path: 'btcusd',
      element: <Btc_Usd />
    },
    {
      path: 'cadjpy',
      element: <Cad_Jpy />
    },
    {
      path: 'chfjpy',
      element: <Chf_Jpy />
    },
    {
      path: 'euraud', 
      element: <Eur_Aud />
    },
    {
      path: 'eurcad',
      element: <Eur_Cad />
    },
    {
      path: 'eurchf',
      element: <Eur_Chf />
    },
    
    {
      path: 'eurnzd',
      element: <Eur_Nzd />
    },
   
    {
      path: 'eurusd', 
      element: <Eur_Usd />
    },
   
    {
      path: 'eurjpy', 
      element: <Eur_Jpy />
    },
    

    {
      path: 'gbpaud', 
      element: <Gbp_Aud />
     },
     {
      path: 'gbpcad',
      element: <Gbp_Cad />
    },
    {
      path: 'gbpchf',
      element: <Gbp_Chf />
    },
    {
      path: 'gbpnzd',
      element: <Gbp_Nzd />
    },
    {
      path: 'gbpjpy', 
      element: <Gbp_Jpy />
    },
     
    {
      path: 'gbpusd', 
      element: <Gbp_USd />
      },

      {
        path: 'nzdcad',
        element: <Nzd_Cad />

      },{
        path: 'nzdjpy',
        element: <Nzd_Jpy />
      },{
        path: 'nzdusd',
        element: <Nzd_Usd />
      },

      {
        path: 'usdcad',
        element: <Usd_Cad />
      },
      {
        path: 'usdchf',
        element: <Usd_Chf />
      },
      {
        path: 'usdjpy',
        element: <Usd_Jpy />
      },
      {
        path: 'usdoil',
        element: <Usd_Oil />
      },
    {
      path: 'xauusd',
      element: <Xau_Usd />
    },
    
     // Add new tpc here
    {
      path: 'newincident',
      element: <Incidents />
    },
    {
      path: 'incident-list',
      element: <IncidentsList />
    },
    {
      path: 'incidents/:id',
      element: <IncidentsView />
    },
    {
      path: 'controllers',
      element: <Controllers />
    },
    {
      path: 'cyclists',
      element: <Cyclists />
    },
    {
      path: 'patrolmovement',
      element: <PatrolMovement />
    },

    {
      path: 'qrfmovement',
      element: <QRFMovement />
    },

  ]
};

export default MainRoutes;
